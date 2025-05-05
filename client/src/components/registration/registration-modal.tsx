import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudentForm } from "./student-form";
import { AgentForm } from "./agent-form";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [activeTab, setActiveTab] = useState<string>("student");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successTitle, setSuccessTitle] = useState("");
  const [successDescription, setSuccessDescription] = useState("");

  // Reset form state when modal is opened/closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setShowSuccess(false);
        setActiveTab("student");
      }, 300);
    }
  }, [isOpen]);

  const handleStudentSuccess = () => {
    setShowSuccess(true);
    setSuccessTitle("Application Submitted Successfully");
    setSuccessDescription("Thank you for your application. Our team will review your information and contact you shortly.");
  };

  const handleAgentSuccess = () => {
    setShowSuccess(true);
    setSuccessTitle("Agent Application Submitted");
    setSuccessDescription("Thank you for your interest. Please check your email for further instructions. Our team will contact you for onboarding.");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-gray-900">Registration</DialogTitle>
        </DialogHeader>

        {!showSuccess ? (
          <>
            <Tabs
              defaultValue="student"
              value={activeTab}
              onValueChange={setActiveTab}
              className="mt-4"
            >
              <div className="px-6">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="student">Register as Student</TabsTrigger>
                  <TabsTrigger value="agent">Register as Agent</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="student" className="mt-4 p-6 pt-2 space-y-4">
                <StudentForm onSuccess={handleStudentSuccess} />
              </TabsContent>

              <TabsContent value="agent" className="mt-4 p-6 pt-2 space-y-4">
                <AgentForm onSuccess={handleAgentSuccess} />
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <div className="text-center py-10 px-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-medium text-gray-900">{successTitle}</h3>
              <p className="mt-3 text-gray-600">{successDescription}</p>
              <div className="mt-8">
                <Button
                  onClick={onClose}
                  className="w-full bg-gradient-primary"
                >
                  Return to Home
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
