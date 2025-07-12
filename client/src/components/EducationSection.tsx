import { GraduationCap, University } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { education } from "@/lib/constants";

export default function EducationSection() {
  const ref = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`p-8 card-hover ${
                index === 0
                  ? "bg-gradient-to-br from-primary to-secondary text-white"
                  : "bg-neutral-light border-2 border-primary/20"
              }`}
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  {index === 0 ? (
                    <GraduationCap className="w-10 h-10 mr-4" />
                  ) : (
                    <University className="w-10 h-10 text-primary mr-4" />
                  )}
                  <div>
                    <h3 className={`text-2xl font-bold ${index === 0 ? 'text-white' : 'text-text-primary'}`}>
                      {edu.degree}
                    </h3>
                    <p className={index === 0 ? 'text-blue-100' : 'text-neutral-dark'}>
                      {edu.field}
                    </p>
                  </div>
                </div>
                <p className={`text-lg mb-4 ${index === 0 ? 'text-white' : 'text-neutral-dark'}`}>
                  {edu.institution} - {edu.location}
                </p>
                <p className={`mb-4 ${index === 0 ? 'text-blue-100' : 'text-neutral-dark'}`}>
                  {edu.period}
                </p>
                <div className={`rounded-lg p-4 ${index === 0 ? 'bg-white/10' : 'bg-white border border-primary/20'}`}>
                  <p className={`text-sm font-medium ${index === 0 ? 'text-white' : 'text-text-primary'}`}>
                    Thesis Project:
                  </p>
                  <p className={`text-sm ${index === 0 ? 'text-blue-100' : 'text-neutral-dark'}`}>
                    {edu.thesis}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
