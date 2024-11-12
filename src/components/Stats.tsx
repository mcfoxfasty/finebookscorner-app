import React from 'react';
import { BookOpen, Users, BookMarked, Star } from 'lucide-react';

export function Stats() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          <div className="flex items-center space-x-4">
            <BookOpen className="h-8 w-8 text-emerald-500" />
            <div>
              <p className="text-2xl font-bold text-navy">2.5M+</p>
              <p className="text-gray-600">Books Listed</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-emerald-500" />
            <div>
              <p className="text-2xl font-bold text-navy">500K+</p>
              <p className="text-gray-600">Active Readers</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <BookMarked className="h-8 w-8 text-emerald-500" />
            <div>
              <p className="text-2xl font-bold text-navy">100+</p>
              <p className="text-gray-600">Categories</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Star className="h-8 w-8 text-emerald-500" />
            <div>
              <p className="text-2xl font-bold text-navy">4.8</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}