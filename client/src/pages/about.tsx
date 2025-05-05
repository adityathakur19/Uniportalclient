import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ApplyModal from "../components/registration/apply-modal"; 

export default function About() {
  // Add state for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-heading">About Uniportal India</h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Streamlining the admission process for international students seeking quality education in India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Gateway to Indian Education</h2>
            <p className="text-gray-600 mb-4">
              Uniportal India simplifies the journey for international students seeking to study in India. 
              We partner with top universities across the country to provide seamless admission services, 
              visa assistance, and cultural orientation.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of expert consultants guides students through every step of the process, from choosing 
              the right program to settling into campus life. With our extensive network and years of experience, 
              we ensure a smooth transition to your academic life in India.
            </p>
            <div className="flex items-center space-x-2">
              <div className="h-1 w-10 bg-primary rounded"></div>
              <p className="text-primary font-medium">Trusted by students from 50+ countries</p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                Our mission is to connect international students with quality education opportunities in India,
                helping them navigate cultural transitions and achieve academic success.
              </p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                We aim to be the premier educational consultancy for international students seeking to study in India,
                known for our personalized approach and exceptional service.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="default" className="bg-gradient-primary" onClick={handleOpenModal}>
                Learn More About Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Why Choose Uniportal India?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary bg-opacity-20 text-primary mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">
                    <strong className="text-gray-800">Expert Guidance:</strong> Our counselors have deep expertise in Indian education system
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary bg-opacity-20 text-primary mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">
                    <strong className="text-gray-800">University Partnerships:</strong> Direct relationships with 15+ top Indian universities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary bg-opacity-20 text-primary mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">
                    <strong className="text-gray-800">Visa Success:</strong> 98% visa approval rate for our applicants
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary bg-opacity-20 text-primary mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">
                    <strong className="text-gray-800">End-to-End Support:</strong> From application to arrival and accommodation
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Team</h3>
              <p className="text-gray-600 mb-4">
                Our diverse team of education experts includes former university administrators, 
                international education specialists, and cultural transition coaches, all committed 
                to your academic success.
              </p>
              <Button variant="outline" className="mt-2 border-primary text-primary hover:bg-primary hover:text-white">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add the modal */}
      <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}