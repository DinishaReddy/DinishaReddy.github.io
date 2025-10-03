import { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
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

  const experiences = [
    {
      title: 'Research Assistant – PISCES Lab',
      company: 'San Diego State University',
      location: 'San Diego, CA',
      period: 'Sep 2025 – Present',
      description: '',
      link: 'https://jianshuliu1721.github.io/positions/',
      achievements: [
        'Developed a Digital Twin traffic simulator (RUTH) using Python for orchestration and Rust for performance-critical routing, enabling real-time urban mobility modeling for smart city research.',
        'Scaled large-scale simulations across multi-node HPC clusters with OpenMPI for distributed parallelism and ZeroMQ for efficient inter-process communication, supporting dynamic traffic intervention testing.',
        'Enhanced simulation fidelity by integrating OpenStreetMap road networks (OSMnx, GDAL) and exporting high-volume Floating Car Data (HDF5, Pickle) for analytics and policy evaluation.'
      ],
      technologies: ['Python', 'Rust', 'OpenMPI', 'ZeroMQ', 'OpenStreetMap', 'HPC', 'OSMnx', 'GDAL']
    },
    {
      title: 'Software Engineering Intern',
      company: 'FluentGrid',
      location: 'Remote',
      period: 'Jun 2024 – Aug 2024',
      description: '',
      link: 'https://drive.google.com/file/d/1zEH-qvomJ16BJ_hiWpV8LRZ3FSDONmMy/view?usp=sharing',
      achievements: [
        'Developed full-stack web applications using Node.js and React.js, integrating JWT for secure authentication, Apache Kafka for real-time data streaming, and Elasticsearch for advanced search functionality.',
        'Refined and optimized responsive React.js components, improving user engagement by 15% and reducing page load times by 20%.',
        'Tuned and designed SQL queries for high-performance data retrieval (30% faster execution) while integrating MongoDB to manage unstructured datasets effectively.',
        'Deployed applications on AWS (EC2, S3, Lambda, RDS) and automated infrastructure provisioning using Terraform to ensure scalability and efficient resource utilization.'
      ],
      technologies: ['Node.js', 'React.js', 'JWT', 'Apache Kafka', 'Elasticsearch', 'AWS', 'Terraform', 'MongoDB']
    },
    {
      title: 'Trainee – PwC Cyber Risk & Regulatory Launchpad',
      company: 'PwC',
      location: 'Remote',
      period: 'Dec 2023 – July 2024',
      description: '',
      link: 'https://drive.google.com/file/d/1jB1XIW025XLHKuvmTRgQz-0eS55j0zgN/view?usp=sharing',
      achievements: [
        'Ranked Top 3 out of 1000+ participants in a competitive cybersecurity aptitude and coding challenge.',
        'Built a Python + SQLite login system with secure password hashing, login-attempt tracking, and basic account lockout to simulate real-world authentication.',
        'Developed a file integrity checker in Python using SHA-256 hashing and SQLite to flag tampered, missing, or new files with database-backed reporting.',
        'Practiced threat modeling and incident response by simulating vulnerabilities and outlining step-by-step remediation strategies.'
      ],
      technologies: ['Python', 'SQLite', 'SHA-256', 'Java', 'RDBMS', 'Cybersecurity']
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Work <span className="text-accent">Experience</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-card p-8 rounded-lg card-hover">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-hover-yellow mb-2">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-accent font-medium mb-4">
                  <span>{exp.company}</span>
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-hover-yellow transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-hover-yellow mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs"
                      >
                        {tech}
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

export default ExperienceSection;