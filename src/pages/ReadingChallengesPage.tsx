import React from 'react';
import { Trophy, Target, Clock, BookOpen, Award } from 'lucide-react';

const challenges = [
  {
    id: 1,
    title: "2024 Reading Challenge",
    description: "Read 50 books in 2024",
    progress: 12,
    goal: 50,
    endDate: "2024-12-31",
    participants: 1234,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Classics Marathon",
    description: "Read 10 classic novels in 3 months",
    progress: 3,
    goal: 10,
    endDate: "2024-06-30",
    participants: 567,
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Genre Explorer",
    description: "Read books from 5 different genres",
    progress: 2,
    goal: 5,
    endDate: "2024-05-31",
    participants: 789,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800"
  }
];

export function ReadingChallengesPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">Reading Challenges</h1>
          <p className="text-xl text-gray-600 mb-8">
            Push your reading boundaries and track your progress
          </p>
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
            Create Custom Challenge
          </button>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Trophy className="h-8 w-8 text-yellow-400" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-2">{challenge.title}</h2>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Progress</span>
                    <span>{challenge.progress} / {challenge.goal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-emerald-600 h-2.5 rounded-full"
                      style={{ width: `${(challenge.progress / challenge.goal) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    <span className="text-gray-600">
                      Ends {new Date(challenge.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-emerald-600" />
                    <span className="text-gray-600">
                      {challenge.participants.toLocaleString()} participants
                    </span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                    Join Challenge
                  </button>
                  <button className="flex items-center justify-center w-12 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Award className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}