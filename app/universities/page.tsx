import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Coursera for Campus</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Empower students with job-relevant skills. Provide faculty with high-quality content to enhance their curriculum.
        </p>
         <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Boost student employability</h2>
                <p className="text-gray-600 mb-6">
                    Prepare students for the jobs of tomorrow with courses from top universities and industry leaders like Google, IBM, and Meta.
                </p>
                <button className="px-6 py-3 border border-blue-600 text-blue-600 font-bold rounded hover:bg-blue-50 transition-colors">
                    Learn More
                </button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
