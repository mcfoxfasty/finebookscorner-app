import React from 'react';
import { Trophy, Star, BookOpen, Clock, Target, Award } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "Bookworm",
    description: "Read 10 books",
    progress: 8,
    total: 10,
    icon: BookOpen,
    unlocked: false
  },
  {
    id: 2,
    title: "Speed Reader",
    description: "Read for 50 hours total",
    progress: 50,
    total: 50,
    icon: Clock,
    unlocked: true
  },
  {
    id: 3,
    title: "Genre Explorer",
    description: "Read books from 5 different genres",
    progress: 3,
    total: 5,
    icon: Target,
    unlocked: false
  },
  {
    id: 4,
    title: "Dedicated Reader",
    description: "Maintain a 30-day reading streak",
    progress: 15,
    total: 30,
    icon: Star,
    unlocked: false
  }
];

export function AchievementsPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-navy mb-4">Achievements</h1>
          <p className="text-xl text-gray-600">
            Track your reading milestones and earn badges
          </p>
        </header>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Award className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-navy">12</p>
            <p className="text-gray-600">Achievements Earned</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-navy">Silver</p>
            <p className="text-gray-600">Current Rank</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-navy">2,450</p>
            <p className="text-gray-600">Total Points</p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.id}
                className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                  achievement.unlocked ? 'border-2 border-emerald-500' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`h-8 w-8 ${
                      achievement.unlocked ? 'text-emerald-600' : 'text-gray-400'
                    }`} />
                    {achievement.unlocked && (
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Unlocked
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{achievement.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Progress</span>
                      <span>{achievement.progress} / {achievement.total}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          achievement.unlocked ? 'bg-emerald-600' : 'bg-gray-400'
                        }`}
                        style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Achievements */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Next Milestones</h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Trophy className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Gold Reader</h3>
                    <p className="text-sm text-gray-600">Read 100 books total</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600">76/100</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Marathon Reader</h3>
                    <p className="text-sm text-gray-600">Read for 100 hours</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600">82/100</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Review Master</h3>
                    <p className="text-sm text-gray-600">Write 50 book reviews</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600">31/50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}