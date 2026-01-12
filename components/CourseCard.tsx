import Link from 'next/link';
import { Star } from 'lucide-react';
import { Course } from '@/data/courses';

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Link href={`/courses/${course.id}`} className="block h-full">
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col bg-white">
        <div className="h-40 bg-gray-200 relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />  
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center mb-2">
              

              <div className="w-6 h-6 bg-gray-300 rounded mr-2"></div>
              <span className="text-xs font-semibold text-gray-700">{course.partner}</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{course.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{course.type}</p>
          
          <div className="mt-auto">
              <div className="flex items-center mb-1">
                  <span className="text-amber-500 font-bold text-sm mr-1">{course.rating}</span>
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-gray-500 text-xs ml-1">({course.reviews})</span>
              </div>
              <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{course.level}</span>
                  {/* Display tags as small pills if needed, or just keep it simple */}
              </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
