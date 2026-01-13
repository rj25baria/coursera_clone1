export const dynamic = "force-dynamic";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseList from '@/components/CourseList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <CourseList />
      <Footer />
    </main>
  );
}
