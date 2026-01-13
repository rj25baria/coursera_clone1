'use client';

import { useState, useEffect } from 'react';
import { Flame, Award } from 'lucide-react';

const StreakTracker = () => {
  const [streak, setStreak] = useState(0);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastLogin = localStorage.getItem('lastLoginDate');
    const currentStreak = parseInt(localStorage.getItem('currentStreak') || '0');

    if (lastLogin === today) {
      setStreak(currentStreak);
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toISOString().split('T')[0];

      let newStreak = 1;
      if (lastLogin === yesterdayString) {
        newStreak = currentStreak + 1;
      }

      setStreak(newStreak);
      localStorage.setItem('currentStreak', newStreak.toString());
      localStorage.setItem('lastLoginDate', today);
    }
    
    // Check for badge (e.g., 7-day streak)
    // For demo purposes, let's say 7 days is the goal.
    // In a real app, we might check if they *just* hit 7.
    // Here we'll show it if they are on 7+ days.
    if (streak >= 7) {
        setShowBadge(true);
    }

  }, []); // Run once on mount

  return (
    <div className="flex items-center space-x-2 mr-4" title={`Current Streak: ${streak} days`}>
      <div className={`flex items-center px-2 py-1 rounded-full ${streak > 0 ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>
        <Flame className={`w-4 h-4 mr-1 ${streak > 0 ? 'fill-current animate-pulse' : ''}`} />
        <span className="font-bold text-sm">{streak}</span>
      </div>
      {showBadge && (
          <div className="flex items-center px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200" title="7-Day Streak Badge!">
              <Award className="w-4 h-4 mr-1" />
              <span className="text-xs font-bold">7-Day Champ</span>
          </div>
      )}
    </div>
  );
};

export default StreakTracker;