import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { skills, languages } from "@/lib/constants";

export default function SkillsSection() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="bg-white shadow-lg card-hover">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                  alt="Industrial electrical equipment and control panels"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-text-primary">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Specializations */}
          <Card className="bg-white shadow-lg card-hover">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                  alt="Electrical control systems and industrial automation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-text-primary">Specializations</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.specializations.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="skill-badge bg-accent/10 text-accent hover:bg-accent hover:text-white"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="bg-white shadow-lg card-hover">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                  alt="Modern office workspace with computer and engineering tools"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-text-primary">Languages</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-neutral-dark font-medium">{lang.name}</span>
                      <span className="text-sm text-primary">
                        {lang.level} {lang.score && `(${lang.score})`}
                      </span>
                    </div>
                    <Progress value={lang.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
