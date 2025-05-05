import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { GraduationCap, UserRound } from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [_, setLocation] = useLocation();
  
  const handleStudentClick = () => {
    onClose();
    setLocation("/student-registration");
  };
  
  const handleAgentClick = () => {
    onClose();
    setLocation("/agent-registration");
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">Apply Now</DialogTitle>
        </DialogHeader>

        <div className="p-6 pt-2">
          <p className="text-center text-gray-500 mb-6">
            Select how you would like to register with Uniportal India
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              onClick={handleStudentClick}
              className="border rounded-lg p-6 flex flex-col items-center text-center cursor-pointer transition-shadow hover:shadow-md"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Student</h3>
              <p className="text-gray-500 text-sm">
                Apply as a student seeking admission to top Indian universities
              </p>
            </div>
            
            <div 
              onClick={handleAgentClick}
              className="border rounded-lg p-6 flex flex-col items-center text-center cursor-pointer transition-shadow hover:shadow-md"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <UserRound className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Agent</h3>
              <p className="text-gray-500 text-sm">
                Register as an educational consultant or agent partnering with us
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
