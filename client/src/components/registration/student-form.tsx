import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Upload } from "lucide-react";
import React, { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { uploadFile } from "@/lib/aws-s3";
import { COUNTRIES, COURSES, COLLEGES } from "@/lib/constants";
import API_URL from "../config/api-url";

const MAX_FILE_SIZE = 15 * 1024 * 1024; 
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const studentFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  country: z.string().min(1, "Please select your country"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  whatsapp: z.string().optional(), // Optional on frontend but will use phone if empty
  email: z.string().email("Please enter a valid email address"),
  course: z.string().min(1, "Please select a course"),
  otherCourse: z.string().optional(),
  college: z.string().min(1, "Please select a college"),
  otherCollege: z.string().optional(),
  passport: z.string().min(4, "Please enter a valid passport number"),
});

type StudentFormValues = z.infer<typeof studentFormSchema>;

interface StudentFormProps {
  onSuccess: () => void;
}

export function StudentForm({ onSuccess }: StudentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [courseTypeFilter, setCourseTypeFilter] = useState("");
  const { toast } = useToast();
  
  // Filter courses based on selected course type
  const filteredCourses = useMemo(() => {
    if (!courseTypeFilter) return COURSES;
    
    if (courseTypeFilter === "Other") {
      return COURSES.filter(course => 
        !course.startsWith("B.Tech") && 
        !course.startsWith("M.Tech") && 
        !course.startsWith("PhD") && 
        !course.startsWith("Diploma")
      );
    }
    
    return COURSES.filter(course => course.startsWith(courseTypeFilter));
  }, [courseTypeFilter]);
  


const form = useForm<StudentFormValues>({
  resolver: zodResolver(studentFormSchema),
  defaultValues: {
    firstName: "",
    lastName: "",
    country: "",
    phone: "",
    whatsapp: "", 
    email: "",
    course: "",
    otherCourse: "",
    college: "",
    otherCollege: "",
    passport: "",
  },
});

  const watchCourse = form.watch("course");
  const watchCollege = form.watch("college");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selectedFileArray: File[] = [];
    let hasErrors = false;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds the 10MB limit.`,
          variant: "destructive",
        });
        hasErrors = true;
        continue;
      }

      // Validate file type
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported file type.`,
          variant: "destructive",
        });
        hasErrors = true;
        continue;
      }

      selectedFileArray.push(file);
    }

    if (!hasErrors) {
      setSelectedFiles(prevFiles => [...prevFiles, ...selectedFileArray]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (!files) return;

    const selectedFileArray: File[] = [];
    let hasErrors = false;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds the 10MB limit.`,
          variant: "destructive",
        });
        hasErrors = true;
        continue;
      }

      // Validate file type
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported file type.`,
          variant: "destructive",
        });
        hasErrors = true;
        continue;
      }

      selectedFileArray.push(file);
    }

    if (!hasErrors) {
      setSelectedFiles(prevFiles => [...prevFiles, ...selectedFileArray]);
    }
  };

const onSubmit = async (data: StudentFormValues) => {
  setIsSubmitting(true);
  setUploadProgress(0);
  
  try {
    // Upload documents to S3 if any
    const documentUrls: string[] = [];
    
    if (selectedFiles.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const progress = Math.round(((i + 1) / selectedFiles.length) * 50);
        setUploadProgress(progress);
        
        const url = await uploadFile(file);
        documentUrls.push(url);
      }
    }

    setUploadProgress(75);
    
    const selectedCountry = COUNTRIES.find(country => country.code === data.country);
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      country: selectedCountry?.name || data.country,
      countryCode: selectedCountry?.phoneCode || data.country, 
      phoneNumber: data.phone, 
      whatsappNumber: data.whatsapp || data.phone, 
      email: data.email,
      course: data.course === "Other" ? data.otherCourse : data.course,
      otherCourse: data.otherCourse,
      college: data.college === "Other" ? data.otherCollege : data.college,
      otherCollege: data.otherCollege,
      passportNumber: data.passport, // Map 'passport' to 'passportNumber'
      documents: documentUrls,
    };

    await apiRequest("POST", `${API_URL}/student-registration`, formData);

    setUploadProgress(100);
    
    // Delay success to simulate completion
    setTimeout(() => {
      onSuccess();
      setIsSubmitting(false);
    }, 500);
    
  } catch (error) {
    console.error("Error submitting form:", error);
    toast({
      title: "Error submitting application",
      description: "There was an error submitting your application. Please try again.",
      variant: "destructive",
    });
    setIsSubmitting(false);
  }
};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name} ({country.phoneCode})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="WhatsApp Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant={!courseTypeFilter ? "default" : "outline"}
                size="sm"
                onClick={() => setCourseTypeFilter("")}
                className="text-xs md:text-sm"
              >
                All Courses
              </Button>
              <Button
                type="button"
                variant={courseTypeFilter === "B.Tech" ? "default" : "outline"}
                size="sm"
                onClick={() => setCourseTypeFilter("B.Tech")}
                className="text-xs md:text-sm"
              >
                B.Tech
              </Button>
              <Button
                type="button"
                variant={courseTypeFilter === "M.Tech" ? "default" : "outline"}
                size="sm"
                onClick={() => setCourseTypeFilter("M.Tech")}
                className="text-xs md:text-sm"
              >
                M.Tech
              </Button>
              <Button
                type="button"
                variant={courseTypeFilter === "PhD" ? "default" : "outline"}
                size="sm"
                onClick={() => setCourseTypeFilter("PhD")}
                className="text-xs md:text-sm"
              >
                PhD
              </Button>
              <Button
                type="button"
                variant={courseTypeFilter === "Diploma" ? "default" : "outline"}
                size="sm"
                onClick={() => setCourseTypeFilter("Diploma")}
                className="text-xs md:text-sm"
              >
                Diploma
              </Button>
              <Button
                type="button"
                variant={courseTypeFilter === "Other" ? "default" : "outline"}
                size="sm"
                onClick={() => setCourseTypeFilter("Other")}
                className="text-xs md:text-sm"
              >
                Other Degrees
              </Button>
            </div>
            
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Course" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {filteredCourses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {watchCourse === "Other" && (
            <FormField
              control={form.control}
              name="otherCourse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specify Course</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Course Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="college"
            render={({ field }) => (
              <FormItem>
                <FormLabel>College</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select College" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COLLEGES.map((college) => (
                      <SelectItem key={college} value={college}>
                        {college}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {watchCollege === "Other" && (
            <FormField
              control={form.control}
              name="otherCollege"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specify College</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter College Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        <FormField
          control={form.control}
          name="passport"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passport Number</FormLabel>
              <FormControl>
                <Input placeholder="Passport Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2">
          <Label>Upload Documents</Label>
          <div
            className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-light">
                  <span>Upload files</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    multiple
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.pdf"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, PDF up to 10MB
              </p>
            </div>
          </div>

          {selectedFiles.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700">Selected files:</h4>
              <ul className="mt-2 divide-y divide-gray-200 border border-gray-200 rounded-md">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">{file.name}</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="font-medium text-red-600 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {uploadProgress < 100 ? `Uploading... ${uploadProgress}%` : "Processing..."}
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </Form>
  );
}
