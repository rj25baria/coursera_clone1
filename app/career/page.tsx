import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Find Your New Career</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          We can help you find the right career path. Explore high-growth roles, see what you’ll do day-to-day, and the skills you’ll need to succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Data Analyst</h3>
                <p className="text-gray-600 mb-4">Collect, process, and perform statistical analyses on data.</p>
                <button className="text-blue-600 font-bold hover:underline">Explore Path →</button>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">UX Designer</h3>
                <p className="text-gray-600 mb-4">Make digital and physical products easier and more enjoyable to use.</p>
                <button className="text-blue-600 font-bold hover:underline">Explore Path →</button>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Project Manager</h3>
                <p className="text-gray-600 mb-4">Oversee the planning and execution of projects to ensure they're successful.</p>
                <button className="text-blue-600 font-bold hover:underline">Explore Path →</button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
