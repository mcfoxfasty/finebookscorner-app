import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Book, BookFilters } from '../types/book';
import { searchBooks, getHighlyRatedBooks } from '../services/books';
import { BookGrid } from './BookGrid';
import { BookSort } from './BookSort';
import { Pagination } from './Pagination';
import { useDebounce } from '../hooks/useDebounce';

const BOOKS_PER_PAGE = 20;

export function BookBrowser() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<BookFilters>({
    category: '',
    sortBy: 'relevance',
    searchQuery: ''
  });

  const debouncedSearchQuery = useDebounce(filters.searchQuery, 300);

  useEffect(() => {
    loadBooks();
  }, [debouncedSearchQuery, filters.category, filters.sortBy, currentPage]);

  async function loadBooks() {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!debouncedSearchQuery) {
        // If no search query, show highly rated books
        const highlyRated = await getHighlyRatedBooks();
        setBooks(highlyRated);
        setTotalItems(highlyRated.length);
      } else {
        // If there's a search query, use the search function
        const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
        const { books: newBooks, totalItems } = await searchBooks(
          debouncedSearchQuery,
          filters.category,
          filters.sortBy,
          startIndex,
          BOOKS_PER_PAGE
        );
        setBooks(newBooks);
        setTotalItems(totalItems);
      }
    } catch (err) {
      setError('Failed to load books');
    } finally {
      setIsLoading(false);
    }
  }

  const totalPages = Math.ceil(totalItems / BOOKS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-8">
        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="search"
              placeholder="Search by title, author, or keywords..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={filters.searchQuery}
              onChange={(e) => 
                setFilters(prev => ({ ...prev, searchQuery: e.target.value }))
              }
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <BookSort
            value={filters.sortBy}
            onChange={(sortBy) => 
              setFilters(prev => ({ ...prev, sortBy }))
            }
          />
        </div>

        {/* Results */}
        {error ? (
          <div className="text-red-500 text-center py-8">{error}</div>
        ) : (
          <>
            <div className="text-gray-600">
              Found {totalItems.toLocaleString()} books
            </div>
            <BookGrid books={books} isLoading={isLoading} />
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}