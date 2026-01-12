import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DegreesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Earn Your Degree</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Earn a bachelor’s or master’s degree from a top university at a breakthrough price. Learn from the same professors and graduate with a high-value credential.
        </p>
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why earn a degree on Coursera?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Affordable tuition</li>
                <li>Flexible schedule</li>
                <li>Stackable credentials</li>
                <li>World-class faculty</li>
            </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
