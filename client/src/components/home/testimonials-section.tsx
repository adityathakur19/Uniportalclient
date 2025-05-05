import { useState, useEffect, useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  program: string;
  country: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    program: "Computer Science",
    country: "USA",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Uniportal made my transition to studying in India seamless. From university selection to visa processing, their guidance was invaluable. The cultural orientation helped me adjust quickly to campus life."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    program: "Business Management",
    country: "UK",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 4.5,
    text: "The personalized attention from Uniportal's counselors helped me find the perfect business program. Their post-admission support with accommodation and orientation was exceptional."
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    program: "Medicine",
    country: "Egypt",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "As a medical student, finding the right program was crucial. Uniportal's expert advice helped me secure admission to a top medical college. Their visa assistance saved me tremendous stress."
  },
  {
    id: 4,
    name: "Mei Chen",
    program: "Engineering",
    country: "China",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "I'm impressed with Uniportal's efficiency and attention to detail. They carefully matched me with universities that aligned with my career goals in engineering, and guided me through every step."
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(100);
  const trackRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlideWidth(33.333);
      } else {
        setSlideWidth(100);
      }
    };
    
    // Initial call
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
  const maxIndex = Math.ceil(testimonials.length / (slideWidth === 100 ? 1 : 3)) - 1;

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-heading">Student Testimonials</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Hear from our international students about their experiences
          </p>
        </div>
        
        <div className="testimonial-slider relative">
          <div className="overflow-hidden">
            <div 
              ref={trackRef}
              className="testimonial-track flex transition-transform duration-300" 
              style={{ transform: `translateX(-${activeIndex * slideWidth}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={`testimonial-slide min-w-full md:min-w-[33.333%] px-4`}>
                  <div className="h-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                          <img className="w-full h-full object-cover" src={testimonial.image} alt={`${testimonial.name} from ${testimonial.country}`} />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.program}, {testimonial.country}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            viewBox="0 0 20 20" 
                            fill={i < Math.floor(testimonial.rating) ? "currentColor" : (i < testimonial.rating ? "currentColor" : "none")}
                            stroke="currentColor"
                          >
                            {i < Math.floor(testimonial.rating) ? (
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            ) : (
                              i < testimonial.rating ? (
                                // Half star
                                <path fillRule="evenodd" d="M10 15.934l4.12 2.157a.5.5 0 00.73-.561l-.8-4.618 3.32-3.227a.5.5 0 00-.278-.857l-4.605-.664-2.053-4.192a.5.5 0 00-.9 0L7.533 8.164l-4.605.664a.5.5 0 00-.278.857l3.32 3.227-.8 4.618a.5.5 0 00.73.561L10 15.934z" clipRule="evenodd" stroke="currentColor" strokeWidth="0.5" />
                              ) : (
                                // Empty star
                                <path fillRule="evenodd" d="M10 15.934l4.12 2.157a.5.5 0 00.73-.561l-.8-4.618 3.32-3.227a.5.5 0 00-.278-.857l-4.605-.664-2.053-4.192a.5.5 0 00-.9 0L7.533 8.164l-4.605.664a.5.5 0 00-.278.857l3.32 3.227-.8 4.618a.5.5 0 00.73.561L10 15.934z" clipRule="evenodd" stroke="currentColor" strokeWidth="0.5" fill="none" />
                              )
                            )}
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button 
                key={index}
                className={`testimonial-dot w-3 h-3 rounded-full bg-primary ${
                  index === activeIndex ? 'opacity-100' : 'opacity-40'
                }`} 
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonials group ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
