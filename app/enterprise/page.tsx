import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EnterprisePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Coursera for Business</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Upskill your employees with the world’s best content. Drive business results with a learning platform that helps you develop critical skills.
        </p>
        <div className="bg-gray-900 text-white p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Transform your workforce</h2>
            <p className="text-xl text-gray-300 mb-8">
                Join 3,000+ companies using Coursera for Business.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors">
                Contact Sales
            </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
