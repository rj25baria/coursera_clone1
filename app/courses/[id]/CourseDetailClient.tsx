'use client';

import { useState, useEffect, useRef } from 'react';
import { Course } from '@/data/courses';
import { Download, CheckCircle, Bell, Play, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import Link from 'next/link';

interface CourseDetailClientProps {
  course: Course;
}

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const [isOffline, setIsOffline] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [reminderSet, setReminderSet] = useState<'1h' | 'tomorrow' | 'none'>('none');
  const [completed, setCompleted] = useState(false);
  
  // Video Resume State
  const videoRef = useRef<HTMLVideoElement>(null);
  const [savedTime, setSavedTime] = useState(0);
  const [showResumeBtn, setShowResumeBtn] = useState(false);

  // Task 1: Check Offline Availability on Mount
  useEffect(() => {
    const offlineStatus = localStorage.getItem(`offline_${course.id}`);
    if (offlineStatus === 'true') {
      setIsOffline(true);
    }

    // Task 6: Check Video Resume Time
    const time = localStorage.getItem(`video_progress_${course.id}`);
    if (time) {
      setSavedTime(parseFloat(time));
      setShowResumeBtn(true);
    }
  }, [course.id]);

  // Task 1: Handle Download
  const handleDownload = () => {
    setDownloading(true);
    // Simulate download delay
    setTimeout(() => {
      localStorage.setItem(`offline_${course.id}`, 'true');
      setIsOffline(true);
      setDownloading(false);
      alert('Course content downloaded for offline access!');
    }, 1500);
  };

  // Task 2: Handle Reminder
  const handleSetReminder = (type: '1h' | 'tomorrow' | 'none') => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    setReminderSet(type);
    
    if (type === '1h') {
      // Simulate 1 hour reminder (shortened to 5 seconds for demo)
      setTimeout(() => {
        new Notification(`Time to learn: ${course.title}`, {
          body: "Get back to your course!",
          icon: "/favicon.ico"
        });
      }, 5000); // Demo: 5 seconds instead of 1 hour
      alert('Reminder set for 1 hour (Demo: 5 seconds)');
    } else if (type === 'tomorrow') {
       alert('Reminder set for tomorrow!');
    }
  };

  // Task 4: Handle Completion
  const handleComplete = () => {
    setCompleted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Task 6: Handle Video Update & Resume
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      localStorage.setItem(`video_progress_${course.id}`, videoRef.current.currentTime.toString());
    }
  };

  const handleVideoLoad = () => {
    if (videoRef.current && savedTime > 0) {
      videoRef.current.currentTime = savedTime;
    }
  };

  const resumeVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = savedTime;
      videoRef.current.play();
      setShowResumeBtn(false);
    }
  };

  const getYouTubeEmbedUrl = (rawUrl?: string) => {
    if (!rawUrl) return null;
    let url: URL;
    try {
      url = new URL(rawUrl);
    } catch {
      return null;
    }

    const hostname = url.hostname.replace(/^www\./, '');
    const path = url.pathname;

    if (hostname === 'youtu.be') {
      const id = path.split('/').filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (hostname !== 'youtube.com') return null;

    if (path.startsWith('/embed/')) {
      const id = path.split('/').filter(Boolean)[1];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (path === '/watch') {
      const id = url.searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (path.startsWith('/shorts/')) {
      const id = path.split('/').filter(Boolean)[1];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    return null;
  };

  const youTubeEmbedUrl = getYouTubeEmbedUrl(course.videoUrl);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Back Link */}
      <div className="bg-white border-b border-gray-200 p-4">
          <div className="container mx-auto">
              <Link href="/" className="text-blue-600 hover:underline">← Back to Courses</Link>
          </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Course Header */}
            <div className="p-8 border-b border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                        <span className="text-sm font-semibold text-blue-600 mb-2 block">{course.partner}</span>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{course.level}</span>
                            <span>•</span>
                            <span>{course.rating} ⭐ ({course.reviews})</span>
                            {isOffline && (
                                <span className="flex items-center text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Available Offline
                                </span>
                            )}
                        </div>
                    </div>
                    
                    {/* Task 1: Download Button */}
                    <button 
                        onClick={handleDownload}
                        disabled={isOffline || downloading}
                        className={`mt-4 md:mt-0 flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                            isOffline 
                            ? 'bg-gray-100 text-gray-400 cursor-default' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        <Download className="w-4 h-4 mr-2" />
                        {downloading ? 'Downloading...' : 'Download Offline'}
                    </button>
                </div>
                
                <p className="text-gray-700 max-w-3xl">{course.description}</p>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Left Column: Video & Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Task 6: Video Player */}
                    <div className="bg-black rounded-lg overflow-hidden aspect-video relative group">
                        {youTubeEmbedUrl ? (
                            <iframe
                                src={youTubeEmbedUrl}
                                className="w-full h-full"
                                title={course.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <>
                                <video
                                    ref={videoRef}
                                    src={course.videoUrl}
                                    controls
                                    className="w-full h-full"
                                    onTimeUpdate={handleTimeUpdate}
                                    onLoadedData={handleVideoLoad}
                                />
                                {showResumeBtn && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10 p-4">
                                        <div className="text-center">
                                            <button
                                                onClick={resumeVideo}
                                                className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold flex items-center mx-auto hover:bg-blue-700 transition-transform transform hover:scale-105 text-sm sm:text-base"
                                            >
                                                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                                Resume from {Math.floor(savedTime)}s
                                            </button>
                                            <button
                                                onClick={() => setShowResumeBtn(false)}
                                                className="mt-2 text-white hover:text-gray-300 text-sm"
                                            >
                                                Dismiss
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Task 4: Completion Section */}
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-center justify-between">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Ready to finish?</h3>
                            <p className="text-sm text-gray-600">Mark this course as completed to earn your certificate.</p>
                        </div>
                        <button 
                            onClick={handleComplete}
                            disabled={completed}
                            className={`px-6 py-3 rounded-lg font-bold transition-colors flex items-center ${
                                completed 
                                ? 'bg-green-600 text-white cursor-default' 
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                        >
                            <Award className="w-5 h-5 mr-2" />
                            {completed ? 'Completed!' : 'Complete Course'}
                        </button>
                    </div>

                    {completed && (
                        <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg animate-bounce">
                            Great Job! You’ve completed this course!
                        </div>
                    )}
                </div>

                {/* Right Column: Sidebar */}
                <div className="space-y-6">
                    {/* Task 2: Reminders */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                            <Bell className="w-5 h-5 mr-2 text-gray-500" />
                            Set Reminder
                        </h3>
                        <div className="space-y-2">
                            <button 
                                onClick={() => handleSetReminder('1h')}
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                                    reminderSet === '1h' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-50'
                                }`}
                            >
                                Remind me in 1 hour
                            </button>
                            <button 
                                onClick={() => handleSetReminder('tomorrow')}
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                                    reminderSet === 'tomorrow' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-50'
                                }`}
                            >
                                Remind me tomorrow
                            </button>
                            <button 
                                onClick={() => handleSetReminder('none')}
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50`}
                            >
                                No reminders
                            </button>
                        </div>
                    </div>

                    {/* Course Content List (Static) */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Course Content</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-sm text-gray-700">
                                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-xs font-bold">1</div>
                                Introduction
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-xs font-bold">2</div>
                                Fundamentals
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-xs font-bold">3</div>
                                Advanced Topics
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-xs font-bold">4</div>
                                Final Project
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
