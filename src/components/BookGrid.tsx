import React from 'react';
import { Book } from '../types/book';
import { BookCard } from './BookCard';
import { Loader } from './Loader';

interface BookGridProps {
  books: Book[];
  isLoading: boolean;
}

export function BookGrid({ books, isLoading }: BookGridProps) {
  if (isLoading) {
    return <Loader />;
  }

  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No books found. Try a different search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}