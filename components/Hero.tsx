import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-white py-8 md:py-16 lg:py-20 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
              Learn without limits
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
              Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class universities and companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-base sm:text-lg font-bold rounded hover:bg-blue-700 transition-colors">
                Join for Free
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 border-2 border-blue-600 text-base sm:text-lg font-bold rounded hover:bg-blue-50 transition-colors">
                Try Coursera for Business
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full">
              <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden relative shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Online learning professional"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
