export interface Course {
  id: string;
  image: string;
  partner: string;
  title: string;
  rating: number;
  reviews: string;
  level: string;
  type: string;
  tags: string[];
  description?: string;
  videoUrl?: string;
}

export const courses: Course[] = [
  {
    id: 'google-data-analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    partner: 'Google',
    title: 'Google Data Analytics',
    rating: 4.8,
    reviews: '132k reviews',
    level: 'Beginner',
    type: 'Professional Certificate',
    tags: ['Data Science', 'Business'],
    description: 'Get started in the high-growth field of data analytics with a professional certificate from Google.',
    videoUrl:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'

  },
  {
    id: 'ibm-data-science',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
    partner: 'IBM',
    title: 'IBM Data Science',
    rating: 4.6,
    reviews: '75k reviews',
    level: 'Beginner',
    type: 'Professional Certificate',
    tags: ['Data Science', 'Programming'],
    description: 'Kickstart your career in data science & ML. Learn Python, SQL, data analysis and machine learning.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    id: 'python-for-everybody',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80',
    partner: 'University of Michigan',
    title: 'Python for Everybody',
    rating: 4.8,
    reviews: '250k reviews',
    level: 'Beginner',
    type: 'Specialization',
    tags: ['Programming', 'Computer Science'],
    description: 'Learn to program and analyze data with Python from scratch.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    id: 'meta-front-end',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
    partner: 'Meta',
    title: 'Meta Front-End Developer',
    rating: 4.7,
    reviews: '15k reviews',
    level: 'Beginner',
    type: 'Professional Certificate',
    tags: ['Programming', 'Web Development'],
    description: 'Build job-ready front-end development skills and earn a credential from Meta.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },
  {
    id: 'machine-learning',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80',
    partner: 'DeepLearning.AI',
    title: 'Machine Learning',
    rating: 4.9,
    reviews: '50k reviews',
    level: 'Intermediate',
    type: 'Specialization',
    tags: ['AI', 'Data Science'],
    description: 'Master machine learning concepts and real-world implementations.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
  },
  {
    id: 'science-of-well-being',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    partner: 'Yale University',
    title: 'The Science of Well-Being',
    rating: 4.9,
    reviews: '35k reviews',
    level: 'Mixed',
    type: 'Course',
    tags: ['Personal Development', 'Health'],
    description: 'Increase happiness and build productive habits using science-backed techniques.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  },
  {
    id: 'google-project-management',
    image:  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    partner: 'Google',
    title: 'Google Project Management',
    rating: 4.8,
    reviews: '90k reviews',
    level: 'Beginner',
    type: 'Professional Certificate',
    tags: ['Business', 'Management'],
    description: 'Become job-ready for a career in project management.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: 'stanford-food-health',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    partner: 'Stanford University',
    title: 'Food & Health',
    rating: 4.7,
    reviews: '20k reviews',
    level: 'Beginner',
    type: 'Course',
    tags: ['Health', 'Nutrition'],
    description: 'Explore the relationship between food, health, and sustainability.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
  },
];
