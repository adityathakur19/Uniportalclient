import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { log } from "./vite";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiPrefix = "/api";

  // AWS configuration endpoint
  app.get(`${apiPrefix}/aws-config`, (req: Request, res: Response) => {
    try {
      // Only expose the credentials needed for the client
      res.json({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        s3Bucket: process.env.AWS_S3_BUCKET,
        region: "ap-southeast-2" 
      });
      log("AWS configuration retrieved");
    } catch (error) {
      console.error("Error retrieving AWS configuration:", error);
      res.status(500).json({ message: "Failed to retrieve AWS configuration" });
    }
  });

  // Contact form submission
  app.post(`${apiPrefix}/uni-contact`, async (req: Request, res: Response) => {
    try {
      const contactData = req.body;
      
      // Validate required fields
      if (!contactData.fullName || !contactData.email || !contactData.phone || !contactData.country || !contactData.message) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Store contact form submission
      const success = await storage.saveContactSubmission(contactData);
      
      if (success) {
        return res.status(200).json({ message: "Contact form submitted successfully" });
      } else {
        throw new Error("Failed to save contact form submission");
      }
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "An error occurred while processing your request" });
    }
  });

  // Student registration
  app.post(`${apiPrefix}/student-registration`, async (req: Request, res: Response) => {
    try {
      const studentData = req.body;
      
      // Validate required fields
      if (!studentData.firstName || !studentData.lastName || !studentData.email || !studentData.country || !studentData.phone || !studentData.course || !studentData.college || !studentData.passport) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Store student registration
      const success = await storage.saveStudentRegistration(studentData);
      
      if (success) {
        return res.status(200).json({ message: "Student registration completed successfully" });
      } else {
        throw new Error("Failed to save student registration");
      }
    } catch (error) {
      console.error("Error processing student registration:", error);
      return res.status(500).json({ message: "An error occurred while processing your request" });
    }
  });

  // Agent registration
  app.post(`${apiPrefix}/agent-registration`, async (req: Request, res: Response) => {
    try {
      const agentData = req.body;
      
      // Validate required fields
      if (!agentData.agentName || !agentData.email || !agentData.country || !agentData.phone || !agentData.passport) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Store agent registration
      const success = await storage.saveAgentRegistration(agentData);
      
      if (success) {
        return res.status(200).json({ message: "Agent registration completed successfully" });
      } else {
        throw new Error("Failed to save agent registration");
      }
    } catch (error) {
      console.error("Error processing agent registration:", error);
      return res.status(500).json({ message: "An error occurred while processing your request" });
    }
  });

  // Handle preflight requests for CORS
  app.options(`${apiPrefix}/*`, (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
