import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookDetails } from '../types/book';
import { getBookDetails } from '../services/books';
import { Loader } from '../components/Loader';
import { ReviewStars } from '../components/ReviewStars';
import { Heart, BookOpen, Award, Calendar, Book, Globe2, BookMarked, Library, ExternalLink, Eye } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';
import { ShareMenu } from '../components/ShareMenu';

// Helper function to clean HTML and format text
function formatDescription(description: string): string {
  // Remove HTML tags but preserve paragraphs
  return description
    // Replace paragraph tags with newlines
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '\n\n')
    // Remove other HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove extra whitespace
    .replace(/\n\s+\n/g, '\n\n')
    .trim();
}

export function BookDetailsPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<BookDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

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

  const handleFavoriteClick = () => {
    if (!book) return;
    if (isFavorite(book.id)) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;
  if (!book) return <div className="text-center py-12 text-gray-500">Book not found</div>;

  const formattedDescription = formatDescription(book.description);
  const currentUrl = window.location.href;

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
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
              {book.isUsed && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-900/75 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    USED
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-4">
              {/* Action Buttons */}
              <div className="flex justify-between space-x-4">
                <button
                  onClick={handleFavoriteClick}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                    isFavorite(book.id)
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite(book.id) ? 'fill-current' : ''}`} />
                  <span>{isFavorite(book.id) ? 'Remove from Favorites' : 'Add to Favorites'}</span>
                </button>
                <ShareMenu title={book.title} url={currentUrl} />
              </div>

              {/* External Links */}
              {book.amazonLink && (
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#FF9900] text-white rounded-lg hover:bg-[#FF8800] transition-colors"
                >
                  <span>View on Amazon</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}

              {book.previewLink && (
                <a
                  href={book.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Eye className="h-5 w-5" />
                  <span>Preview Book</span>
                </a>
              )}

              {book.downloadLink && (
                <a
                  href={book.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Library className="h-5 w-5" />
                  <span>Download Book</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <header>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
                {book.title}
              </h1>
              {book.subtitle && (
                <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                  {book.subtitle}
                </p>
              )}
              <p className="text-lg text-gray-600">
                by{' '}
                <span className="font-medium">
                  {book.authors.join(', ')}
                </span>
              </p>
            </header>

            <div className="flex items-center space-x-4">
              <ReviewStars rating={book.rating} size={24} />
              <span className="text-gray-600">
                {book.ratingsCount.toLocaleString()} ratings
              </span>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">About this edition</h2>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {formattedDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </section>

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
                  <p className="text-gray-600">{book.pageCount.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe2 className="h-5 w-5 text-emerald-600 mt-1" />
                <div>
                  <p className="font-medium">Language</p>
                  <p className="text-gray-600">
                    {new Intl.DisplayNames(['en'], { type: 'language' }).of(book.language)}
                  </p>
                </div>
              </div>
            </div>

            {book.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {book.categories.map((category) => (
                  <a
                    key={category}
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
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