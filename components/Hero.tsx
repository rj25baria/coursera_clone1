import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-white py-12 md:py-20 border-b border-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Learn without limits
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class universities and companies.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded hover:bg-blue-700 transition-colors">
              Join for Free
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 border border-blue-600 text-lg font-bold rounded hover:bg-blue-50 transition-colors">
              Try Coursera for Business
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative h-64 md:h-96 w-full">
          <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden relative">
          <img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
  alt="Online learning professional"
  className="w-full h-full object-cover rounded-lg"
/>



          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
