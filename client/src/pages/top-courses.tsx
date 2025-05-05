import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Filter, Check, Book, GraduationCap, Star, Sparkles, Globe, Banknote, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { courses, domains, Course } from "./courses-data";

const programOptions = domains;

// Number of courses per page
const COURSES_PER_PAGE = 12;

export default function TopCourses() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [feesRange, setFeesRange] = useState<[number, number]>([2000, 25000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [loadedCourses, setLoadedCourses] = useState<{[id: number]: boolean}>({});
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    // Simulate staggered loading of course cards for animation effect
    const timer = setTimeout(() => {
      courses.forEach((course, index) => {
        setTimeout(() => {
          setLoadedCourses(prev => ({
            ...prev,
            [course.id]: true
          }));
        }, index * 100);
      });
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedPrograms, feesRange, searchQuery]);

  // Map courses to the expected format
  const mappedCourses = courses.map(course => ({
    id: course.id,
    category: course.domain.toLowerCase().includes("engineering") ? "engineering" : 
            course.domain.toLowerCase().includes("computer") ? "engineering" :
            course.domain.toLowerCase().includes("management") ? "business" :
            course.domain.toLowerCase().includes("medical") ? "medicine" :
            course.domain.toLowerCase().includes("pharmacy") ? "medicine" :
            course.domain.toLowerCase().includes("law") ? "arts" :
            course.domain.toLowerCase().includes("social") ? "arts" :
            course.domain.toLowerCase().includes("science") ? "science" :
            course.domain.toLowerCase().includes("fashion") ? "design" :
            course.domain.toLowerCase().includes("hospitality") ? "business" :
            course.domain.toLowerCase().includes("education") ? "arts" : "other",
    program: course.domain,
    title: course.name,
    description: course.description,
    duration: `${course.duration} Months`,
    level: course.educationLevel || "Graduate",
    fees: `$${course.fees.toLocaleString()} per year`,
    feeRange: [course.fees * 0.8, course.fees * 1.2] as [number, number], 
    image: course.image,
    // rating:
    // featured: 
    // topUniversities: 
  }));

  // Filter courses based on selected criteria
  const filteredCourses = mappedCourses.filter(course => {
    if (selectedCategory !== "all" && course.category !== selectedCategory) {
      return false;
    }
    
    if (selectedPrograms.length > 0 && 
        course.program && 
        !selectedPrograms.includes(course.program)) {
      return false;
    }
    
    // Filter by fees range
    if (course.feeRange && 
        (course.feeRange[0] > feesRange[1] || course.feeRange[1] < feesRange[0])) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !course.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + COURSES_PER_PAGE);
  
  const toggleProgramSelection = (program: string) => {
    setSelectedPrograms(prev => 
      prev.includes(program) 
        ? prev.filter(p => p !== program) 
        : [...prev, program]
    );
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      // Scroll to top of course section
      document.getElementById("courses-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      // Scroll to top of course section
      document.getElementById("courses-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-200 hover:from-orange-200 hover:to-amber-200">
            <Sparkles className="w-4 h-4 mr-1" /> Premium Education
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Top Courses</span> in India
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg">
            Discover world-class programs offered by our partner universities
          </p>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="mb-8 rounded-xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/3">
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <Button
              variant="outline"
              className="w-full md:w-auto flex items-center justify-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Advanced Filters
            </Button>
          </div>
          
          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100 animate-slide-in-from-bottom">
              {/* Programs Filter */}
              <div>
                <Label className="mb-2 block font-medium">Programs</Label>
                <div className="flex flex-wrap gap-2">
                  {programOptions.map((program) => (
                    <Badge
                      key={program}
                      variant="outline"
                      className={cn(
                        "cursor-pointer transition-all",
                        selectedPrograms.includes(program) 
                          ? "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200" 
                          : "hover:bg-gray-100"
                      )}
                      onClick={() => toggleProgramSelection(program)}
                    >
                      {selectedPrograms.includes(program) && (
                        <Check className="w-3 h-3 mr-1" />
                      )}
                      {program}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <Label className="mb-2 block font-medium">Tuition Fees Range</Label>
                <div className="px-2">
                  <Slider
                    defaultValue={[2000, 25000]}
                    min={3000}
                    max={25000}
                    step={500}
                    value={feesRange}
                    onValueChange={(value) => setFeesRange(value as [number, number])}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <div>${feesRange[0].toLocaleString()}</div>
                    <div>${feesRange[1].toLocaleString()}</div>
                  </div>
                </div>
              </div>
              
              {/* Education Level Filter */}
              {/* <div>
                <Label className="mb-2 block font-medium">Education Level</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="undergraduate" className="h-4 w-4 rounded text-orange-500 focus:ring-orange-500" />
                    <label htmlFor="undergraduate" className="text-sm">Undergraduate</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="postgraduate" className="h-4 w-4 rounded text-orange-500 focus:ring-orange-500" />
                    <label htmlFor="postgraduate" className="text-sm">Postgraduate</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="diploma" className="h-4 w-4 rounded text-orange-500 focus:ring-orange-500" />
                    <label htmlFor="diploma" className="text-sm">Diploma</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="phd" className="h-4 w-4 rounded text-orange-500 focus:ring-orange-500" />
                    <label htmlFor="phd" className="text-sm">PhD</label>
                  </div>
                </div>
              </div> */}
            </div>
          )}
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
          <div className="flex justify-center mb-8 overflow-x-auto py-2">
            <TabsList className="grid grid-cols-7 md:grid-cols-7 h-auto rounded-full bg-orange-50 p-1">
              <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm px-4 py-2">All</TabsTrigger>
              <TabsTrigger value="engineering" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm px-4 py-2">Engineering</TabsTrigger>
              <TabsTrigger value="business" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm px-4 py-2">Business</TabsTrigger>
              <TabsTrigger value="medicine" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm px-4 py-2">Medicine</TabsTrigger>
              <TabsTrigger value="science" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm px-4 py-2">Science</TabsTrigger>
              <TabsTrigger value="arts" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm px-4 py-2">Arts</TabsTrigger>
              <TabsTrigger value="design" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm px-4 py-2">Design</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={selectedCategory} className="animate-fade-in" id="courses-section">
            {filteredCourses.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedCourses.map((course) => (
                    <CourseCard 
                      key={course.id} 
                      course={course} 
                      isLoaded={loadedCourses[course.id]}
                    />
                  ))}
                </div>
                
                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center mt-12 gap-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={goToPrevPage}
                      disabled={currentPage === 1}
                      className={cn(
                        "h-10 w-10 rounded-full", 
                        currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-50 hover:text-orange-600"
                      )}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    
                    <div className="text-sm font-medium px-4">
                      Page {currentPage} of {totalPages}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      className={cn(
                        "h-10 w-10 rounded-full", 
                        currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-50 hover:text-orange-600"
                      )}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="mx-auto w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <Book className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No courses found</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Try adjusting your filters or search query to find the courses you're looking for.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 py-12 px-8 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="nonzero">
                <path d="M50 50c55.228 0 100 44.772 100 100s-44.772 100-100 100S-50 205.228-50 150 -5.228 50 50 50zm0 20c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" />
                <path d="M250 50c55.228 0 100 44.772 100 100s-44.772 100-100 100-100-44.772-100-100 44.772-100 100-100zm0 20c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" />
                <path d="M150 150c55.228 0 100 44.772 100 100s-44.772 100-100 100-100-44.772-100-100 44.772-100 100-100zm0 20c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" />
                <path d="M350 150c55.228 0 100 44.772 100 100s-44.772 100-100 100-100-44.772-100-100 44.772-100 100-100zm0 20c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" />
              </g>
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Looking for a Specific Program?</h2>
              <p className="text-white/90 mb-6 max-w-xl">
                We partner with over 150 universities offering more than 250 different programs.
                Our education consultants will help you find the perfect match for your academic goals.
              </p>
              <Button 
                className="bg-white text-orange-600 hover:bg-orange-50 shadow-xl">
                Contact Education Consultant
              </Button>
            </div>
            
            <div className="hidden md:block">
              <GraduationCap className="w-28 h-28 text-white/90 animate-float" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    duration: string;
    level: string;
    fees: string;
    image?: string;
    rating?: number;
    featured?: boolean;
    topUniversities?: string[];
    feeRange?: [number, number];
    program?: string;
    category?: string;
  };
  isLoaded?: boolean;
}

function CourseCard({ course, isLoaded = true }: CourseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-500",
        "hover:shadow-xl hover:-translate-y-2",
        isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
      )}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-r from-orange-100 to-amber-50">
        {course.image && (
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        )}
        
        {/* Featured badge */}
        {course.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            <Star className="w-3 h-3 inline-block mr-1" />
            Featured
          </div>
        )}
        
        {/* Category pill */}
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-white/80 backdrop-blur-sm text-orange-700 hover:bg-white font-medium">
            {course.program || course.category}
          </Badge>
        </div>
        
        {/* Rating badge */}
        {course.rating && (
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-orange-700 text-xs font-bold px-2 py-1 rounded-md flex items-center">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-1" />
            {course.rating.toFixed(1)}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {course.description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-start">
            <Book className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
            <div>
              <span className="text-gray-500 text-xs block">Duration:</span>
              <p className="font-medium text-gray-800">{course.duration}</p>
            </div>
          </div>
          <div className="flex items-start">
            <GraduationCap className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
            <div>
              <span className="text-gray-500 text-xs block">Level:</span>
              <p className="font-medium text-gray-800">{course.level}</p>
            </div>
          </div>
          <div className="flex items-start col-span-2">
            <Banknote className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
            <div>
              <span className="text-gray-500 text-xs block">Tuition Fees:</span>
              <p className="font-medium text-gray-800">{course.fees}</p>
            </div>
          </div>
        </div>
        
        {/* Top Universities */}
        {course.topUniversities && course.topUniversities.length > 0 && (
          <div className="mb-4">
            <span className="text-gray-500 text-xs flex items-center mb-1">
              <Globe className="w-3 h-3 mr-1" /> Top Universities
            </span>
            <div className="flex flex-wrap gap-1">
              {course.topUniversities.map((uni, i) => (
                <span key={i} className="text-xs bg-orange-50 text-orange-700 rounded-full px-2 py-0.5">
                  {uni}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}