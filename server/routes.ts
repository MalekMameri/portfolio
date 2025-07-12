import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // In a real application, you would save to database and send email
      // For now, we'll just simulate success
      console.log("Contact form submission:", validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data.",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    // In a real application, this would serve the actual CV file
    res.json({ 
      success: true,
      message: "CV download would be implemented here",
      downloadUrl: "#" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
