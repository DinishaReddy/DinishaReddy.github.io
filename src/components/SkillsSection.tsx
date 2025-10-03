import { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, Settings, GitBranch, Shield } from 'lucide-react';

const SkillsSection = () => {
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

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript (ES5/ES6)", "Go", "TypeScript", "C", "C++", "SQL", "HTML5", "CSS"]
    },
    {
      icon: Database,
      title: "Frameworks & Libraries",
      skills: ["React.js", "Angular", "Vue.js", "Node.js", "Express.js", "Spring Boot", "MongoDB", "PyTorch", "scikit-learn"]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Linux", "Microservices"]
    },
    {
      icon: GitBranch,
      title: "Developer Tools",
      skills: ["Git", "GitHub", "GitLab", "JIRA", "Selenium", "PyTest", "Version Control"]
    },
    {
      icon: Shield,
      title: "Security & Data Science",
      skills: ["Cybersecurity", "Threat Modeling", "Data Analysis", "Machine Learning", "Deep Learning", "Time-series Forecasting"]
    },
    {
      icon: Settings,
      title: "Software Development",
      skills: ["Data Structures", "Algorithms", "OOP", "REST APIs", "Web Development", "Technical Documentation", "Code Review"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-portfolio-dark-gray">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Technical <span className="text-portfolio-yellow">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-portfolio-yellow/30 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-8 h-8 text-portfolio-yellow mr-3" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-portfolio-yellow/10 text-portfolio-yellow text-sm rounded-full border border-portfolio-yellow/20 hover:bg-portfolio-yellow/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;