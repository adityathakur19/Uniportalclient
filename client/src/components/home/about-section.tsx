import { Link } from "wouter";

export default function AboutSection() {
  return (
    <div id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-heading">About Uniportal India</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Streamlining the admission process for international students seeking quality education in India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Your Gateway to Indian Education</h3>
            <p className="text-gray-600 mb-4">
              Uniportal India simplifies the journey for international students seeking to study in India. We partner with top universities across the country to provide seamless admission services, visa assistance, and cultural orientation.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of expert consultants guides students through every step of the process, from choosing the right program to settling into campus life. With our extensive network and years of experience, we ensure a smooth transition to your academic life in India.
            </p>
            <div className="flex items-center space-x-2">
              <div className="h-1 w-10 bg-primary rounded"></div>
              <p className="text-primary font-medium">Trusted by students from 50+ countries</p>
            </div>
            
            <Link href="/about">
              <a className="inline-flex items-center mt-6 text-primary font-medium">
                Learn more about us
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md h-40 md:h-48">
              <img className="w-full h-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*5Z7Umpd1EuY7tsvM" alt="Indian classical dance" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-40 md:h-48">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Famous tourist places" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-40 md:h-48">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1627556704302-624286467c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="World-class education" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-40 md:h-48">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Indian cuisine" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
