import React from 'react';
import { Link } from 'react-router-dom';
import { Star, BookOpen, Heart } from 'lucide-react';
import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'Reading': return 'bg-emerald-500';
      case 'Completed': return 'bg-blue-500';
      case 'DNF': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getConditionColor = (condition?: string) => {
    switch (condition) {
      case 'New': return 'bg-emerald-500';
      case 'Like New': return 'bg-blue-500';
      case 'Very Good': return 'bg-teal-500';
      case 'Good': return 'bg-yellow-500';
      case 'Fair': return 'bg-orange-500';
      case 'Poor': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Link to={`/book/${book.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="aspect-[3/4] relative overflow-hidden">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = 'https://via.placeholder.com/128x192?text=No+Cover';
            }}
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            {book.rarity && (
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-medium">
                {book.rarity}
              </span>
            )}
            {book.condition && (
              <span className={`${getConditionColor(book.condition)} text-white px-2 py-1 rounded text-xs font-medium`}>
                {book.condition}
              </span>
            )}
            {book.format && (
              <span className="bg-gray-900/75 text-white px-2 py-1 rounded text-xs font-medium backdrop-blur-sm">
                {book.format}
              </span>
            )}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-1 group-hover:text-emerald-600">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{book.author}</p>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.round(book.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">{book.rating}/5</span>
          </div>
          <div className="mt-2 flex justify-end">
            <div className="flex items-center gap-2">
              <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-1 text-gray-400 hover:text-emerald-500 transition-colors">
                <BookOpen className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}