import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Globe, BookOpen } from "lucide-react";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  ];
  
  const features = [
    { title: "World-Class Education", icon: <GraduationCap className="h-6 w-6" />, description: "Access to premium educational institutions" },
    { title: "Cultural Experience", icon: <Globe className="h-6 w-6" />, description: "Discover India's rich heritage and diversity" },
    { title: "Affordable Excellence", icon: <BookOpen className="h-6 w-6" />, description: "Quality education at competitive costs" }
  ];

  useEffect(() => {
    // Handle parallax scrolling effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Image slider effect
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, 6000);
    
    setLoaded(true);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [images.length]);

  // Parallax effect calculation
  const translateY = scrollY * 0.3; // Adjust the multiplier for more/less effect

  return (
    <div className="relative bg-gray-900 overflow-hidden" style={{ height: "90vh" }}>
      {/* Background images with transition effect */}
      <div className="absolute inset-0">
        {images.map((image, i) => (
          <div 
            key={image}
            className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
            style={{ 
              opacity: i === activeIndex ? 1 : 0,
              transform: `translateY(${translateY}px) scale(${1 + scrollY * 0.0005})`,
            }}
          >
            <img 
              src={image} 
              alt="University campus in India" 
              className="object-cover w-full h-full transform scale-110"
            />
          </div>
        ))}
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
      </div>

      {/* Animated dots pattern overlay for texture */}
      <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] opacity-10"></div>

      {/* Content section */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              {/* Animated highlight text */}
              <div 
                className={`inline-block bg-gradient-to-r from-amber-500 to-orange-600 rounded-full px-4 py-1 text-sm font-medium text-white mb-6 ${loaded ? 'animate-slide-in-from-left' : 'opacity-0'}`}
              >
                Your Gateway to Academic Excellence in India
              </div>
              
              {/* Main headline with staggered animation */}
              <h1 className={`text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
                <span className="block">Transform Your Future</span>
                <span className="block mt-4 bg-gradient-to-r from-amber-200 to-orange-400 bg-clip-text text-transparent">Study in India</span>
              </h1>
              
              <p className={`text-xl text-gray-300 max-w-2xl ${loaded ? 'animate-slide-in-from-bottom' : 'opacity-0'} delay-300`}>
                Unlock your potential with world-class education in India. Let Uniportal be your guide to a successful academic journey and cultural experience.
              </p>
              
              {/* Action buttons with hover effects */}
              <div className={`flex flex-wrap gap-4 ${loaded ? 'animate-slide-in-from-bottom' : 'opacity-0'} delay-500`}>
                <Button 
                  onClick={onExploreClick}
                  className="group relative inline-flex items-center px-8 py-6 text-base font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  onClick={onExploreClick}
                  variant="outline" 
                  className="relative overflow-hidden inline-flex items-center px-8 py-6 text-base font-medium rounded-lg text-white border-2 border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <span>Discover Programs</span>
                </Button>
              </div>
            </div>
            
            {/* Feature cards with animated appearance */}
            <div className="lg:col-span-5 space-y-4 hidden lg:block">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 ${loaded ? 'animate-slide-in-from-right' : 'opacity-0'} delay-${(index + 1) * 200}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg p-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                      <p className="mt-1 text-sm text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
          <path d="M0,64L60,58.7C120,53,240,43,360,53.3C480,64,600,96,720,96C840,96,960,64,1080,48C1200,32,1320,32,1380,32L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
    </div>
  );
}
