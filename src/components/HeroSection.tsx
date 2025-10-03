import { useEffect, useState } from 'react';
import { ChevronDown, MapPin, GraduationCap } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const educationSection = document.querySelector('#education');
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Name */}
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="text-hover-yellow">Dinisha</span>{' '}
            <span className="text-accent">Reddy</span>
          </h1>
          
          {/* Title */}
          <div className="text-xl sm:text-2xl font-light mb-8 text-muted-foreground">
            <span className="text-hover-yellow">Computer Science Graduate Student</span> &{' '}
            <span className="text-hover-yellow">Aspiring Software Engineer</span>
          </div>

          {/* Education */}
          <div className="flex items-center justify-center mb-4 text-lg">
            <GraduationCap className="w-5 h-5 mr-2 text-accent" />
            <span className="text-hover-yellow">MS Computer Science, SDSU</span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center mb-12 text-lg">
            <MapPin className="w-5 h-5 mr-2 text-accent" />
            <span className="text-hover-yellow">San Diego, CA</span>
          </div>

        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 hover:text-accent ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;