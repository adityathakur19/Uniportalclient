import { Button } from "@/components/ui/button";

interface ApplicationProcessProps {
  onStartApplicationClick: () => void;
}

export default function ApplicationProcess({ onStartApplicationClick }: ApplicationProcessProps) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-heading">Application Process</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Simple steps to start your educational journey in India
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-light bg-opacity-30 -translate-x-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Step 1 */}
            <div className="md:text-right relative">
              <div className="hidden md:block absolute right-0 top-6 w-6 h-6 rounded-full bg-white border-4 border-primary transform translate-x-1/2 z-10"></div>
              <div className="bg-white p-6 rounded-lg shadow-md relative z-1">
                <div className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Fill Out Application</h3>
                <p className="text-gray-600">
                  Complete our online application form with your personal details, academic background, and program preferences.
                </p>
              </div>
            </div>
            
            <div className="md:hidden"></div>
            
            {/* Step 2 */}
            <div className="md:hidden"></div>
            
            <div className="relative">
              <div className="hidden md:block absolute left-0 top-6 w-6 h-6 rounded-full bg-white border-4 border-primary transform -translate-x-1/2 z-10"></div>
              <div className="bg-white p-6 rounded-lg shadow-md relative z-1">
                <div className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Application Review</h3>
                <p className="text-gray-600">
                  Our team reviews your application and identifies the best matching universities and programs based on your profile.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="md:text-right relative">
              <div className="hidden md:block absolute right-0 top-6 w-6 h-6 rounded-full bg-white border-4 border-primary transform translate-x-1/2 z-10"></div>
              <div className="bg-white p-6 rounded-lg shadow-md relative z-1">
                <div className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Receive Admission Letter</h3>
                <p className="text-gray-600">
                  Once approved, you'll receive official admission letters from your selected institutions, typically within 2-3 weeks.
                </p>
              </div>
            </div>
            
            <div className="md:hidden"></div>
            
            {/* Step 4 */}
            <div className="md:hidden"></div>
            
            <div className="relative">
              <div className="hidden md:block absolute left-0 top-6 w-6 h-6 rounded-full bg-white border-4 border-primary transform -translate-x-1/2 z-10"></div>
              <div className="bg-white p-6 rounded-lg shadow-md relative z-1">
                <div className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Visa Assistance</h3>
                <p className="text-gray-600">
                  Our experienced team provides comprehensive visa guidance to ensure a smooth approval process for your student visa.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={onStartApplicationClick}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Start Your Application
          </Button>
        </div>
      </div>
    </div>
  );
}
