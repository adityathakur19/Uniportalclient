import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function StudentLifeSection() {
  return (
    <div id="student-life" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-heading">Student Life in India</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Experience a vibrant blend of traditional culture and modern campus life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Immerse Yourself in a Rich Cultural Experience</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary bg-opacity-20 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">
                  <strong className="text-gray-800">Diverse Campus Communities:</strong> Join students from over 100 countries in India's international university environment.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary bg-opacity-20 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">
                  <strong className="text-gray-800">Cultural Festivals:</strong> Experience vibrant celebrations like Diwali, Holi, and regional festivals throughout the academic year.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary bg-opacity-20 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">
                  <strong className="text-gray-800">Modern Accommodations:</strong> Comfortable on-campus housing with amenities designed for international students.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary bg-opacity-20 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">
                  <strong className="text-gray-800">Extracurricular Activities:</strong> Join clubs, sports teams, and cultural organizations to enrich your education.
                </p>
              </div>
            </div>
            <Link href="/student-life">
              <a className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-primary bg-opacity-10 hover:bg-opacity-20 focus:outline-none">
                Learn More About Student Life
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Campus life" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md mt-8">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Festival" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
