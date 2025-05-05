import { useState } from "react";
import { useLocation } from "wouter";
import { StudentForm } from "@/components/registration/student-form";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StudentRegistration() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [, setLocation] = useLocation();

  const handleSuccess = () => {
    setShowSuccess(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {!showSuccess ? (
        <div className="space-y-8 animate-fadeIn">
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary">Student Application</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete the form below to apply as a student. Our team will review your application 
              and contact you shortly with the next steps.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 border border-gray-100">
            <StudentForm onSuccess={handleSuccess} />
          </div>
        </div>
      ) : (
        <div className="text-center py-12 px-6 bg-white shadow-xl rounded-xl border border-gray-100 animate-fadeIn">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-900">Application Submitted Successfully</h3>
            <p className="mt-3 text-lg text-gray-600 max-w-md mx-auto">
              Thank you for your application. Our team will review your information 
              and contact you shortly with the next steps.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setLocation("/")}
                variant="outline"
                size="lg"
              >
                Return to Home
              </Button>
              <Button
                onClick={() => window.open("https://uniportal.in", "_blank")}
                className="bg-gradient-primary"
                size="lg"
              >
                Visit Main Website
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
