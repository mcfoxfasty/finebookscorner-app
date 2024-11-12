import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Book } from '../types/book';
import { searchBooksByCategory } from '../services/books';
import { BookGrid } from '../components/BookGrid';
import { BookSort } from '../components/BookSort';
import { Loader } from '../components/Loader';

export function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      if (!categoryName) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const fetchedBooks = await searchBooksByCategory(categoryName, 20);
        setBooks(fetchedBooks);
      } catch (err) {
        setError('Failed to load books');
      } finally {
        setIsLoading(false);
      }
    };

    loadBooks();
  }, [categoryName]);

  if (!categoryName) {
    return <div className="text-center py-12">Category not found</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-navy mb-4">
          {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Books
        </h1>
        <p className="text-gray-600">
          Discover our collection of {categoryName.toLowerCase()} books
        </p>
      </div>

      <div className="flex justify-end mb-6">
        <BookSort
          value="relevance"
          onChange={() => {}}
        />
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <div className="text-red-500 text-center py-8">{error}</div>
      ) : (
        <BookGrid books={books} isLoading={false} />
      )}
    </main>
  );
}