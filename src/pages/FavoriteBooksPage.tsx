import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { BookGrid } from '../components/BookGrid';
import { Book } from 'lucide-react';

export function FavoriteBooksPage() {
  const { favorites } = useFavorites();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-navy mb-4">My Favorite Books</h1>
        <p className="text-xl text-gray-600">
          Your personal collection of favorite books
        </p>
      </header>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <Book className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No favorites yet</h2>
          <p className="text-gray-600">
            Start adding books to your favorites by clicking the "Add to Favorites" button on any book page.
          </p>
        </div>
      ) : (
        <BookGrid books={favorites} isLoading={false} />
      )}
    </main>
  );
}