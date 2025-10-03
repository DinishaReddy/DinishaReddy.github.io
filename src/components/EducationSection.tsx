import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
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

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'San Diego State University',
      period: 'Aug 2025 - May 2027',
      gpa: 'In Progress',
      achievements: ['Analysis of Algorithms', 'Data Science', 'Computer Networks & Distributed Systems', 'Building Full-Stack Baseball Application for SDSU'],
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Gandhi Institute Of Technology And Management',
      period: 'Aug 2021 - May 2025',
      gpa: '10/10',
      achievements: ['Intern under Director of Training', 'Chairman of External Relations - I&T Labs', 'Led GitHub Crash Course & AR/VR Events'],
    },
  ];

  const certifications = [
    'PwC Cyber Risk & Regulatory Launchpad (Top 3/1000+)',
    'Python Development & Data Science',
    'Machine Learning & Deep Learning',
    'Cybersecurity & Threat Detection',
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 gradient-section">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="text-accent">Education</span>
          </h2>

          {/* Education Timeline */}
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-card p-8 rounded-lg card-hover">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.period}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-hover-yellow mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-accent font-medium mb-4">{edu.institution}</p>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {edu.degree.includes('Bachelor') ? 'GPA: 10/10 | CGPA: 8.89' : `GPA: ${edu.gpa}`}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full hover:bg-accent/10 hover:text-accent transition-colors duration-300"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;