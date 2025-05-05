import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, ChevronRight } from "lucide-react";
import { useState } from "react";
import ApplyModal from "../components/registration/apply-modal"; 

export default function StudentLife() {
  // Add state for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Student Life in India</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Experience a vibrant blend of traditional culture and modern campus life while pursuing your education in India
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Immerse Yourself in a Rich Cultural Experience</h2>
            <p className="text-gray-600 mb-6">
              Studying in India is more than just earning a degree – it's about immersing yourself in one of the world's most diverse and vibrant cultures. From celebrating colorful festivals to exploring historical landmarks, your educational journey in India will be filled with unforgettable experiences.
            </p>
            <p className="text-gray-600 mb-6">
              Our partner universities provide modern facilities and supportive environments that help international students thrive both academically and socially. You'll join a community of students from around the world, creating connections that last a lifetime.
            </p>
            <Button className="bg-gradient-primary" onClick={handleOpenModal}>
              Apply for Admission
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1200&q=80" alt="Campus life" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md mt-8">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&h=400" alt="Cultural festival" />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What to Expect</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Campus Facilities</h3>
                <p className="text-gray-600">
                  Modern libraries, laboratories, sports complexes, and wi-fi enabled campuses with comfortable housing options.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Student Clubs</h3>
                <p className="text-gray-600">
                  Join diverse clubs for cultural exchange, sports, academic interests, and community service opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cultural Events</h3>
                <p className="text-gray-600">
                  Participate in festivals like Diwali, Holi, and regional celebrations, plus international cultural days.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
                <p className="text-gray-600">
                  Safe and comfortable on-campus housing with amenities designed specifically for international students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Student Support */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student Support Services</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">How We Support You</h3>
                <p className="text-gray-600 mb-6">
                  At Uniportal India, we understand that studying abroad comes with unique challenges. 
                  That's why we offer comprehensive support services designed to help you thrive during your time in India.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Airport Pickup</h4>
                      <p className="text-gray-600 text-sm">Stress-free arrival with our welcome service and transportation to your accommodation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Orientation Program</h4>
                      <p className="text-gray-600 text-sm">Comprehensive introduction to campus life, local culture, and essential services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Ongoing Support</h4>
                      <p className="text-gray-600 text-sm">Regular check-ins and assistance with academic, cultural, and personal challenges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Health Services</h4>
                      <p className="text-gray-600 text-sm">Guidance on healthcare access, insurance, and emergency medical support</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is language a barrier in Indian universities?</AccordionTrigger>
                    <AccordionContent>
                      Most higher education programs in India are taught in English, and university staff are proficient in English. We also offer basic Hindi language courses to help you navigate daily life more easily.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What accommodation options are available?</AccordionTrigger>
                    <AccordionContent>
                      Most universities offer on-campus hostels with single or shared rooms. Off-campus options include private hostels, shared apartments, and homestays with local families. We help you find the best option based on your preferences and budget.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can international students work while studying?</AccordionTrigger>
                    <AccordionContent>
                      International students on student visas can work part-time on-campus jobs. Some programs also offer internships and practical training opportunities as part of the curriculum.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What about safety and security?</AccordionTrigger>
                    <AccordionContent>
                      University campuses in India are generally safe with security personnel, CCTV cameras, and strict access control. We also provide safety guidelines and emergency contact information to all our students.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* Explore India */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore India During Your Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-0">
              <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Taj Mahal" className="w-full h-48 object-cover" />
              <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Historical Wonders</h3>
                  <p className="text-gray-600 mb-4">
                    Visit iconic landmarks like the Taj Mahal, ancient temples, and historical forts during weekend trips and semester breaks.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-0">
              <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Indian cuisine" className="w-full h-48 object-cover" />
              <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Culinary Adventures</h3>
                  <p className="text-gray-600 mb-4">
                    Experience India's diverse cuisines, from spicy street food to regional delicacies and traditional cooking methods.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-0">
              <img src="https://miro.medium.com/v2/resize:fit:1400/0*5Z7Umpd1EuY7tsvM" alt="Cultural event" className="w-full h-48 object-cover" />
              <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Cultural Immersion</h3>
                  <p className="text-gray-600 mb-4">
                    Participate in yoga, meditation, music, dance, and art workshops to experience India's rich cultural heritage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}