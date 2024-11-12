import { useState, useEffect } from 'react';
import { BookDetails } from '../types/book';
import { getBookDetails } from '../services/books';

export function useBookDetails(bookId: string | undefined) {
  const [book, setBook] = useState<BookDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBookDetails = async () => {
      if (!bookId) {
        setIsLoading(false);
        return;
      }
      
      setIsLoading(true);
      setError(null);
      
      try {
        const details = await getBookDetails(bookId);
        setBook(details);
      } catch (err) {
        setError('Failed to load book details');
      } finally {
        setIsLoading(false);
      }
    };

    loadBookDetails();
  }, [bookId]);

  return { book, isLoading, error };
}