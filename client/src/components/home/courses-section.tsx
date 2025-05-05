import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CoursesSection() {
  const courses = [
    {
      title: "Computer Science & Engineering",
      description: "World-class education in software development, AI, machine learning, and computer systems."
    },
    {
      title: "Business Management",
      description: "Comprehensive programs in finance, marketing, operations, and entrepreneurship."
    },
    {
      title: "Medicine & Healthcare",
      description: "MBBS, nursing, pharmacy, and allied health programs with clinical experience."
    },
    {
      title: "Biotechnology",
      description: "Cutting-edge programs in genetic engineering, bioinformatics, and pharmaceutical biotechnology."
    },
    {
      title: "Architecture & Design",
      description: "Creative programs combining traditional principles with modern sustainable design practices."
    },
    {
      title: "Arts & Humanities",
      description: "Diverse programs in literature, philosophy, linguistics, cultural studies and fine arts."
    }
  ];

  return (
    <div id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-heading">Top Courses</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Discover popular programs offered by our partner universities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="h-3 bg-gradient-primary"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/top-courses">
            <Button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Explore More Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
