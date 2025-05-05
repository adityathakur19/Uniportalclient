import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { COUNTRIES } from "@/lib/constants";
import API_URL from "../config/api-url";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const agentFormSchema = z.object({
  agentName: z.string().min(2, "Agent/Company name must be at least 2 characters"),
  companyName: z.string().min(2, "Agent/Company name must be at least 2 characters"),
  country: z.string().min(1, "Please select your country"),
  countryCode: z.string().min(1, "Country code is required"),
  phoneNumber: z.string().min(6, "Please enter a valid phone number"),
  whatsappNumber: z.string().min(6, "Please enter a valid WhatsApp number"),
  email: z.string().email("Please enter a valid email address"),
  passportNumber: z.string().min(4, "Please enter a valid passport number"),
});

type AgentFormValues = z.infer<typeof agentFormSchema>;

interface AgentFormProps {
  onSuccess: () => void;
}

export function AgentForm({ onSuccess }: AgentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [selectedCountry, setSelectedCountry] = useState("");

  const form = useForm<AgentFormValues>({
    resolver: zodResolver(agentFormSchema),
    defaultValues: {
      agentName: "",
      companyName: "",
      country: "",
      countryCode: "",
      phoneNumber: "",
      whatsappNumber: "",
      email: "",
      passportNumber: "",
    },
  });

  const onSubmit = async (data: AgentFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Convert phone numbers to numbers as required by the schema
      const submitData = {
        ...data,
        phoneNumber: Number(data.phoneNumber),
        whatsappNumber: Number(data.whatsappNumber),
      };
      
      // Submit the form data
      await apiRequest("POST", `${API_URL}/agent-registration`, submitData);
      
      // Call success callback
      onSuccess();
      
      toast({
        title: "Application submitted",
        description: "Your agent registration has been successfully submitted.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting application",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle country selection
  const handleCountryChange = (code: string) => {
    // Find the selected country
    const country = COUNTRIES.find(c => c.code === code);
    
    if (country) {
      form.setValue("country", country.name);
      form.setValue("countryCode", country.phoneCode);
    }
    
    setSelectedCountry(code);
  };

  // Handle agent name change to sync with company name
  const handleAgentNameChange = (value: string) => {
    form.setValue("agentName", value);
    form.setValue("companyName", value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="agentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent Name / Company Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Agent or Company Name" 
                  {...field} 
                  onChange={(e) => handleAgentNameChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select 
                onValueChange={(code) => {
                  handleCountryChange(code);
                  field.onChange(code);
                }} 
                value={selectedCountry}
              >
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

        {/* Hidden field for countryCode - populated automatically */}
        <input type="hidden" {...form.register("countryCode")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsappNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp Number</FormLabel>
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

        <FormField
          control={form.control}
          name="passportNumber"
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
        
        {/* Hidden field for companyName - synchronized with agentName */}
        <input type="hidden" {...form.register("companyName")} />

        <Button 
          type="submit" 
          className="w-full bg-gradient-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </Form>
  );
}