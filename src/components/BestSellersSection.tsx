import React, { useState, useEffect } from 'react';
import { BookSection } from './BookSection';
import { Book } from '../types/book';
import { getHighlyRatedBooks } from '../services/books';
import { Loader } from './Loader';

export function BestSellersSection() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const bestSellers = await getHighlyRatedBooks();
        setBooks(bestSellers);
      } catch (err) {
        setError('Failed to load best sellers');
      } finally {
        setIsLoading(false);
      }
    };

    loadBooks();
  }, []);

  if (isLoading) return <Loader />;
  if (error) return null;

  return <BookSection title="Best Sellers" books={books} viewAllLink="/best-sellers" />;
}