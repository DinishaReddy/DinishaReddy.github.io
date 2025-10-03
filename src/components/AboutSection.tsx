import { useEffect, useRef, useState } from 'react';
import { User } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            About <span className="text-accent">Me</span>
          </h2>

          <div className="bg-card p-8 rounded-lg card-hover">
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-hover-yellow">Dinisha Reddy</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              I am Dinisha Reddy, a Master's student in Computer Science at San Diego State University, currently seeking opportunities to contribute to impactful software engineering projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;