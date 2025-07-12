import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { personalInfo } from "@/lib/constants";

export default function AboutSection() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Electrical engineering workspace with blueprints and tools"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">Professional Summary</h3>
            <p className="text-lg text-neutral-dark mb-6 leading-relaxed">
              Qualified engineering professional with extensive experience in electrical systems design.
              Meticulous and detail-oriented in performing calculations and optimizing designs to ensure
              safety, code compliance, and alignment with project specifications.
            </p>
            <p className="text-lg text-neutral-dark mb-8 leading-relaxed">
              Strong analytical skills in identifying and resolving design challenges across various
              industries including petroleum, renewable energy, and industrial automation.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-neutral-dark font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-neutral-dark font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-neutral-dark font-medium">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">MS</div>
                <div className="text-sm text-neutral-dark font-medium">Advanced Degree</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
