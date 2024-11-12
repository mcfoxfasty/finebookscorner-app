import React from 'react';
import { Users, BookOpen, MessageSquare, Calendar } from 'lucide-react';

const groups = [
  {
    id: 1,
    name: "Classic Literature Club",
    members: 234,
    currentBook: "Pride and Prejudice",
    nextMeeting: "2024-03-25T18:00:00",
    description: "We explore timeless classics and discuss their relevance in modern times.",
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Science Fiction Explorers",
    members: 189,
    currentBook: "Dune",
    nextMeeting: "2024-03-27T19:00:00",
    description: "Journey through space and time with fellow sci-fi enthusiasts.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Mystery Readers Society",
    members: 156,
    currentBook: "The Silent Patient",
    nextMeeting: "2024-03-28T20:00:00",
    description: "Unravel mysteries and discuss plot twists together.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800"
  }
];

export function ReadingGroupsPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">Reading Groups</h1>
          <p className="text-xl text-gray-600 mb-8">
            Join a community of readers and discuss your favorite books
          </p>
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
            Create New Group
          </button>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div key={group.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{group.name}</h2>
                  <p className="text-gray-200">{group.description}</p>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-emerald-600" />
                    <span>{group.members} members</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-emerald-600" />
                    <span>Active discussions</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Currently Reading</p>
                      <p className="text-sm text-gray-600">{group.currentBook}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Next Meeting</p>
                    <p className="text-sm text-gray-600">
                      {new Date(group.nextMeeting).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}