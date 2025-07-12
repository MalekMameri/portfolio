import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { workExperience } from "@/lib/constants";

export default function ExperienceSection() {
  const ref = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="timeline-line"></div>
            
            {workExperience.map((experience, index) => (
              <div key={index} className="relative pl-8 pb-12 timeline-item">
                <Card className="bg-white shadow-lg card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-text-primary">{experience.title}</h3>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {experience.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">
                      {experience.company} - {experience.location}
                    </p>
                    <p className="text-neutral-dark leading-relaxed">
                      {experience.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
