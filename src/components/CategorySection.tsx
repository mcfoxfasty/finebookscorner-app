import React, { useState, useEffect } from 'react';
import { Book } from '../types/book';
import { BookSection } from './BookSection';
import { searchBooksByCategory } from '../services/books';
import { Loader } from './Loader';

interface CategorySectionProps {
  category: string;
  viewAllLink?: string;
}

export function CategorySection({ category, viewAllLink }: CategorySectionProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const fetchedBooks = await searchBooksByCategory(category);
        setBooks(fetchedBooks);
      } catch (err) {
        setError('Failed to load books');
      } finally {
        setIsLoading(false);
      }
    };

    loadBooks();
  }, [category]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">{error}</div>;
  }

  return <BookSection title={`${category} Books`} books={books} viewAllLink={viewAllLink} />;
}