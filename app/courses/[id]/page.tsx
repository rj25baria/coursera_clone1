import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';
import CourseDetailClient from './CourseDetailClient';

// This is required for static site generation with dynamic routes
export function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}
