import { useState, useEffect } from 'react';
import { Book, BookDetails } from '../types/book';

const FAVORITES_KEY = 'finereads_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<(Book | BookDetails)[]>(() => {
    const saved = localStorage.getItem(FAVORITES_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (book: Book | BookDetails) => {
    setFavorites(prev => {
      if (prev.some(b => b.id === book.id)) return prev;
      return [...prev, book];
    });
  };

  const removeFavorite = (bookId: string) => {
    setFavorites(prev => prev.filter(book => book.id !== bookId));
  };

  const isFavorite = (bookId: string) => {
    return favorites.some(book => book.id === bookId);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  };
}