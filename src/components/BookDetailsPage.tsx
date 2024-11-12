import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookDetails } from '../types/book';
import { getBookDetails } from '../services/books';
import { Loader } from '../components/Loader';
import { ReviewStars } from '../components/ReviewStars';
import { Heart, Share2, BookOpen, Award, Calendar, Book, Globe2, BookMarked, Library } from 'lucide-react';

export function BookDetailsPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<BookDetails | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBookDetails = async () => {
      if (!bookId) return;
      
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

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-500 text-center py-12">{error}</div>;
  if (!book) return <div className="text-center py-12">Book not found</div>;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
          {/* Left Column - Image */}
          <div className="space-y-6">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-full h-full object-cover"
              />
              {book.rarity && (
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {book.rarity}
                  </span>
                </div>
              )}
            </div>
            <div className="flex justify-center space-x-4">
              <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                <Library className="h-5 w-5" />
                <span>Add to Collection</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <Heart className="h-5 w-5" />
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
              {book.subtitle && (
                <p className="text-xl text-gray-600 mb-4">{book.subtitle}</p>
              )}
              <p className="text-lg text-gray-600">
                by {book.authors.join(', ')}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <ReviewStars rating={book.rating} size={24} />
              <span className="text-gray-600">
                ({book.ratingsCount.toLocaleString()} ratings)
              </span>
            </div>

            {/* Reading Progress */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-lg">Reading Progress</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200">
                      {readingProgress}% Complete
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden bg-emerald-100 rounded">
                  <div
                    style={{ width: `${readingProgress}%` }}
                    className="flex flex-col justify-center bg-emerald-500 transition-all duration-300"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={readingProgress}
                  onChange={(e) => setReadingProgress(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between">
                <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700">
                  <BookMarked className="h-5 w-5" />
                  <span>Update Status</span>
                </button>
                <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700">
                  <BookOpen className="h-5 w-5" />
                  <span>Add Notes</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">About this edition</h2>
              <p className="text-gray-600 leading-relaxed">{book.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Award className="h-5 w-5 text-emerald-600 mt-1" />
                <div>
                  <p className="font-medium">Publisher</p>
                  <p className="text-gray-600">{book.publisher}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-emerald-600 mt-1" />
                <div>
                  <p className="font-medium">Published Date</p>
                  <p className="text-gray-600">
                    {new Date(book.publishedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Book className="h-5 w-5 text-emerald-600 mt-1" />
                <div>
                  <p className="font-medium">Pages</p>
                  <p className="text-gray-600">{book.pageCount}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe2 className="h-5 w-5 text-emerald-600 mt-1" />
                <div>
                  <p className="font-medium">Language</p>
                  <p className="text-gray-600">{book.language.toUpperCase()}</p>
                </div>
              </div>
            </div>

            {book.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {book.categories.map((category) => (
                  <a
                    key={category}
                    href={`/category/${category.toLowerCase()}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}