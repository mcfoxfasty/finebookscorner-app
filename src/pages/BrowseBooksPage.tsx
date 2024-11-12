import React from 'react';
import { BookBrowser } from '../components/BookBrowser';

export function BrowseBooksPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">Browse Our Collection</h1>
          <p className="text-xl text-gray-600">
            Discover thousands of books across various genres and formats
          </p>
        </header>
        <BookBrowser />
      </div>
    </main>
  );
}