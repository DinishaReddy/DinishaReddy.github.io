import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import brainTumorImage from '@/assets/brain-tumor-project.jpg';
import driveopsImage from '@/assets/driveops-project.jpg';
import cyberThreatImage from '@/assets/cyber-threat-project.jpg';

const ProjectsSection = () => {
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

  const projects = [
    {
      title: 'Robust Brain Tumor Detection',
      description: 'Deep learning model for brain tumor classification using CNN, VGG16, and ResNet101 on 7,000+ MRI images with ensemble learning achieving 99.09% accuracy across four tumor types.',
      image: brainTumorImage,
      technologies: ['Python', 'TensorFlow', 'CNN', 'VGG16', 'ResNet101', 'Deep Learning'],
      github: 'https://github.com/DinishaReddy/Robust_Brain_Tumor_Classification.git'
    },
    {
      title: 'DriveOps: Vehicle Rental & Operations Management',
      description: 'Full-stack Vehicle Rental & Operations Management System with Jenkins CI/CD pipeline, Kubernetes orchestration, and ServiceNow integration for automated incident creation.',
      image: driveopsImage,
      technologies: ['Spring Boot', 'React', 'REST APIs', 'SQL', 'Jenkins', 'Kubernetes', 'ServiceNow'],
      github: 'https://github.com/DinishaReddy/DriveOps.git'
    },
    {
      title: 'Cyber Threat Detection using Supervised ML',
      description: 'Applied supervised ML algorithms (Random Forest, XGBoost, SVM) on CICIDS2017 and UNSW-NB15 datasets achieving up to 99.9% accuracy in threat detection and classification.',
      image: cyberThreatImage,
      technologies: ['Python', 'Random Forest', 'XGBoost', 'SVM', 'Machine Learning', 'Cybersecurity'],
      github: 'https://github.com/DinishaReddy/ML_for_detecting_cyberthreats.git'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 gradient-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="text-accent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card p-6 rounded-lg card-hover group">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-hover-yellow mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-accent rounded text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
