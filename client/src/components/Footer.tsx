import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
          <p className="text-gray-400 mb-6">{personalInfo.title}</p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              asChild
            >
              <a href="https://www.linkedin.com/in/malek-mameri-4105912b8/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              asChild
            >
              <a href="https://github.com/MalekMameri" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Twitter className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              asChild
            >
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="w-6 h-6" />
              </a>
            </Button>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              &copy; 2024 {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
