import { useState, useEffect, useRef } from 'react';
import { Sparkles, GraduationCap, Pointer, BriefcaseBusiness, Building } from 'lucide-react';

interface Stat {
  icon: JSX.Element;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

export default function AnimatedStatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const stats: Stat[] = [
    {
      icon: <GraduationCap className="h-7 w-7" />,
      value: 10000,
      label: "International Students",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <Building className="h-7 w-7" />,
      value: 150,
      label: "Partner Universities",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <BriefcaseBusiness className="h-7 w-7" />,
      value: 92,
      suffix: "%", 
      label: "Placement Rate",
      color: "from-rose-400 to-rose-600"
    },
    {
      icon: <Pointer className="h-7 w-7" />,
      value: 250,
      label: "Available Programs",
      color: "from-amber-500 to-yellow-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative py-20 bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/dots-pattern.svg')]"></div>
      
      {/* Section title */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center justify-center space-x-2 bg-orange-100 rounded-full px-4 py-1 mb-4">
          <Sparkles className="h-4 w-4 text-orange-500" />
          <span className="text-sm font-semibold text-orange-700">Our Impact</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Delivering Results That Speak Volumes</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          At Uniportal India, we're proud of our accomplishments in connecting international students with world-class educational opportunities.
        </p>
      </div>
      
      {/* Stats grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${stat.color}`}></div>
              
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${stat.color} mb-6 text-white animate-pulse-glow`}>
                  {stat.icon}
                </div>
                
                <div className="flex items-end mb-2">
                  <div className="relative flex items-center">
                    {inView ? (
                      <CountUp end={stat.value} duration={2 + index * 0.2} suffix={stat.suffix} />
                    ) : (
                      <span className="text-4xl font-bold text-gray-900">0{stat.suffix || ''}</span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Animated counter component
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function CountUp({ end, duration = 2, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const timeRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const steps = 30;
    const increment = end / steps;
    const interval = (duration * 1000) / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    
    timeRef.current = timer;
    
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    };
  }, [end, duration]);
  
  return <span className="text-4xl font-extrabold text-gray-900">{count.toLocaleString()}{suffix}</span>;
}
