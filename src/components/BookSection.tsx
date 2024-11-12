import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Book } from '../types/book';
import { ReviewStars } from './ReviewStars';

interface BookSectionProps {
  title: string;
  books: Book[];
  viewAllLink?: string;
}

export function BookSection({ title, books, viewAllLink }: BookSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrowVisibility = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Remove duplicates while preserving order
  const uniqueBooks = books.filter((book, index) => 
    books.findIndex(b => b.id === book.id) === index
  );

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-navy">{title}</h2>
          {viewAllLink && (
            <Link to={viewAllLink} className="text-emerald-600 hover:text-emerald-700 font-medium">
              VIEW ALL →
            </Link>
          )}
        </div>

        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-navy" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollSnapType: 'x mandatory' }}
            onScroll={updateArrowVisibility}
          >
            {uniqueBooks.map((book) => (
              <Link
                key={book.id}
                to={`/book/${book.id}`}
                className="flex-none w-48 scroll-snap-align-start group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="aspect-[3/4] mb-4 relative overflow-hidden rounded-lg">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = 'https://via.placeholder.com/128x192?text=No+Cover';
                    }}
                  />
                  {book.isUsed && (
                    <span className="absolute top-2 right-2 bg-gray-900/75 text-white text-xs px-2 py-1 rounded">
                      USED
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-navy line-clamp-1 group-hover:text-emerald-600">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{book.author}</p>
                <div className="flex items-center space-x-2">
                  <ReviewStars rating={book.rating} size={16} />
                  <span className="text-sm text-gray-500">({book.rating})</span>
                </div>
              </Link>
            ))}
          </div>

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-navy" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}