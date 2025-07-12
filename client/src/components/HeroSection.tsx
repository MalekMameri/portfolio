import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const ref = useScrollAnimation();
  const { toast } = useToast();

  const handleDownloadCV = async () => {
    try {
      const response = await apiRequest("GET", "/api/download-cv");
      const data = await response.json();
      toast({
        title: "CV Download",
        description: data.message,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download CV",
        variant: "destructive",
      });
    }
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="absolute inset-0 bg-black/20"></div>
      <div ref={ref} className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
              alt="Professional engineer portrait"
              className="w-48 h-48 rounded-full mx-auto shadow-2xl border-4 border-white/20"
            />
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            {personalInfo.name}
          </h1>
          
          <p className="text-xl sm:text-2xl mb-6 font-light">
            {personalInfo.title}
          </p>
          
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleScrollToAbout}
              size="lg"
              className="bg-primary hover:bg-secondary text-white shadow-lg hover:shadow-xl"
            >
              Learn More
            </Button>
            
            <Button
              onClick={handleScrollToContact}
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
            >
              Get In Touch
            </Button>
            
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
