import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign Up</h1>
             <p className="text-center text-gray-600 mb-8">Learn on your own time from top universities and businesses.</p>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="name@email.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="••••••••" />
                </div>
                <button type="button" className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                    Join for Free
                </button>
            </form>
            <div className="mt-6 text-center text-sm text-gray-600">
                Already on Coursera? <Link href="/login" className="text-blue-600 font-bold hover:underline">Log In</Link>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
