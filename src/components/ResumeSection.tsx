import { useEffect, useRef, useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
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

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/My_resume.pdf'; // This would be the path to your resume file in the public folder
    link.download = 'Dinisha_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" ref={sectionRef} className="py-20 gradient-section">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="text-accent">Resume</span>
          </h2>

          <div className="bg-black p-8 rounded-lg card-hover text-center">
            <button 
              onClick={handleDownload}
              className="px-6 py-3 bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors flex items-center gap-2 mx-auto"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;