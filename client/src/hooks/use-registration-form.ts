import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { uploadFile } from "@/lib/aws-s3";
import { StudentRegistration, AgentRegistration } from "@/lib/types";
import { API_ENDPOINTS } from "@/lib/constants";

interface UseRegistrationFormProps {
  onSuccess: () => void;
}

export function useStudentRegistration({ onSuccess }: UseRegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const submitStudentRegistration = async (data: StudentRegistration, files: File[]) => {
    setIsSubmitting(true);
    setUploadProgress(0);
    
    try {
      // Upload documents to S3 if any
      const documentUrls: string[] = [];
      
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const progress = Math.round(((i + 1) / files.length) * 50);
          setUploadProgress(progress);
          
          const url = await uploadFile(file);
          documentUrls.push(url);
        }
      }

      // Additional 50% progress before API call finishes
      setUploadProgress(75);
      
      // Submit the form data with document URLs
      const formData = {
        ...data,
        documents: documentUrls,
      };
      
      await apiRequest("POST", API_ENDPOINTS.STUDENT_REGISTRATION, formData);
      
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

  return {
    isSubmitting,
    uploadProgress,
    submitStudentRegistration
  };
}

export function useAgentRegistration({ onSuccess }: UseRegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitAgentRegistration = async (data: AgentRegistration) => {
    setIsSubmitting(true);
    
    try {
      // Simulate delay for better UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Submit the form data
      await apiRequest("POST", API_ENDPOINTS.AGENT_REGISTRATION, data);
      
      // Call success callback
      onSuccess();
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

  return {
    isSubmitting,
    submitAgentRegistration
  };
}
