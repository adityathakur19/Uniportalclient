import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number;
  suffix?: string;
}

function StatCounter({ target, suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTimestamp: number;
          const duration = 2000; // 2 seconds
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target]);

  return (
    <div ref={counterRef} className="text-4xl font-bold text-primary mb-2">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg shadow-sm border border-gray-100">
            <StatCounter target={15} suffix="+" />
            <p className="text-gray-600">Partnered Universities</p>
          </div>
          
          <div className="text-center p-6 rounded-lg shadow-sm border border-gray-100">
            <StatCounter target={5000} suffix="+" />
            <p className="text-gray-600">Successful Admissions</p>
          </div>
          
          <div className="text-center p-6 rounded-lg shadow-sm border border-gray-100">
            <StatCounter target={98} suffix="%" />
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
