import { Book, BookDetails } from '../types/book';
import { sampleBooks, editorsPickBooks, sampleBookDetails } from '../data/books';
import { getNextApiKey } from './apiKeys';
import { getCachedData, setCachedData } from './cache';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

const handleApiError = (error: unknown, fallbackData: any) => {
  const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
  console.warn(`Using fallback data. ${errorMessage}`);
  return fallbackData;
};

const validateApiResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = await response.json();
  if (!data) {
    throw new Error('No data received from API');
  }
  return data;
};

const determineBookCondition = (saleInfo: any): boolean => {
  if (saleInfo?.saleability === 'FOR_SALE' && saleInfo?.isEbook) {
    return false;
  }
  return Math.random() < 0.3;
};

const getHighQualityCover = (imageLinks: any): string => {
  if (!imageLinks) return '';
  
  // Try to get the highest quality image available
  const coverUrl = imageLinks.extraLarge || 
                  imageLinks.large || 
                  imageLinks.medium || 
                  imageLinks.thumbnail;

  if (!coverUrl) return '';

  return coverUrl
    .replace('http:', 'https:')
    .replace('&edge=curl', '')
    .replace('zoom=1', 'zoom=3');
};

const hasValidImage = (item: any): boolean => {
  const coverUrl = getHighQualityCover(item.volumeInfo?.imageLinks);
  return Boolean(coverUrl);
};

const mapBookData = (item: any): Book | null => {
  const coverUrl = getHighQualityCover(item.volumeInfo?.imageLinks);
  if (!coverUrl) return null;

  const isUsed = determineBookCondition(item.saleInfo);

  return {
    id: item.id,
    title: item.volumeInfo?.title || 'Untitled',
    author: item.volumeInfo?.authors?.[0] || 'Unknown Author',
    description: item.volumeInfo?.description || 'No description available',
    coverUrl,
    rating: item.volumeInfo?.averageRating || Math.floor(Math.random() * 2) + 3,
    reviewCount: item.volumeInfo?.ratingsCount || Math.floor(Math.random() * 1000),
    categories: item.volumeInfo?.categories || [],
    publishedDate: item.volumeInfo?.publishedDate || new Date().toISOString(),
    isUsed: isUsed,
    reviews: [],
    condition: isUsed ? 'Good' : 'New',
    format: item.saleInfo?.isEbook ? 'Ebook' : 'Paperback',
    downloadLink: item.accessInfo?.epub?.downloadLink || item.accessInfo?.pdf?.downloadLink,
    previewLink: item.volumeInfo?.previewLink,
    amazonLink: item.saleInfo?.buyLink
  };
};

async function fetchWithCache<T>(cacheKey: string, fetcher: () => Promise<T>, fallbackData: T): Promise<T> {
  const cachedData = getCachedData<T>(cacheKey);
  if (cachedData) return cachedData;

  try {
    const data = await fetcher();
    setCachedData(cacheKey, data);
    return data;
  } catch (error) {
    return handleApiError(error, fallbackData);
  }
}

export async function searchBooks(
  query: string,
  category?: string,
  sortBy: 'relevance' | 'newest' = 'relevance',
  startIndex: number = 0,
  maxResults: number = 20
): Promise<{ books: Book[], totalItems: number }> {
  const cacheKey = `search-${query}-${category}-${sortBy}-${startIndex}-${maxResults}`;

  return fetchWithCache(cacheKey, async () => {
    let searchQuery = query;
    if (category) {
      searchQuery += `+subject:${category}`;
    }

    const response = await fetch(
      `${BASE_URL}?q=${encodeURIComponent(searchQuery)}&startIndex=${startIndex}&maxResults=${maxResults * 2}&orderBy=${sortBy}&key=${getNextApiKey()}`
    );

    const data = await validateApiResponse(response);
    const books = data.items
      ?.map(mapBookData)
      .filter((book): book is Book => book !== null)
      .slice(0, maxResults) || [];

    return {
      books,
      totalItems: data.totalItems || 0
    };
  }, { books: sampleBooks, totalItems: sampleBooks.length });
}

export async function getHighlyRatedBooks(): Promise<Book[]> {
  const cacheKey = 'highly-rated-books';
  
  return fetchWithCache(cacheKey, async () => {
    // Try multiple queries to get recent books
    const queries = [
      'subject:fiction+publishedDate:2024',
      'subject:nonfiction+publishedDate:2024',
      'subject:fantasy+publishedDate:2024',
      'subject:mystery+publishedDate:2024',
      'subject:romance+publishedDate:2024'
    ];

    const booksPromises = queries.map(async (query) => {
      const response = await fetch(
        `${BASE_URL}?q=${encodeURIComponent(query)}&maxResults=20&orderBy=newest&key=${getNextApiKey()}`
      );
      const data = await validateApiResponse(response);
      return data.items || [];
    });

    const allBooks = (await Promise.all(booksPromises)).flat();

    // Filter and map books
    const books = allBooks
      .filter(item => {
        const publishedDate = item.volumeInfo?.publishedDate;
        return hasValidImage(item) && publishedDate?.startsWith('2024');
      })
      .map(item => mapBookData(item))
      .filter((book): book is Book => book !== null);

    // Remove duplicates
    const uniqueBooks = Array.from(
      new Map(books.map(book => [book.id, book])).values()
    );

    // Sort by rating and take top 10
    return uniqueBooks
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10);
  }, sampleBooks);
}

export async function getEditorsPicks(): Promise<Book[]> {
  const cacheKey = 'editors-picks';
  
  return fetchWithCache(cacheKey, async () => {
    const editorPickTitles = [
      'Project Hail Mary by Andy Weir',
      'Tomorrow, and Tomorrow, and Tomorrow by Gabrielle Zevin',
      'Demon Copperhead by Barbara Kingsolver',
      'Fourth Wing by Rebecca Yarros',
      'Iron Flame by Rebecca Yarros',
      'House of Flame and Shadow by Sarah J. Maas',
      'The Woman in Me by Britney Spears',
      'Hell Bent by Leigh Bardugo'
    ];

    const booksPromises = editorPickTitles.map(async (title) => {
      const [bookTitle, author] = title.split(' by ');
      const query = `intitle:"${bookTitle}" inauthor:"${author}"`;
      const response = await fetch(
        `${BASE_URL}?q=${encodeURIComponent(query)}&maxResults=1&key=${getNextApiKey()}`
      );
      const data = await validateApiResponse(response);
      if (!data.items?.[0] || !hasValidImage(data.items[0])) return null;
      return mapBookData(data.items[0]);
    });

    const books = (await Promise.all(booksPromises)).filter((book): book is Book => book !== null);
    return books;
  }, editorsPickBooks);
}

export async function searchBooksByCategory(
  category: string,
  maxResults: number = 10,
  orderBy: 'relevance' | 'newest' = 'relevance'
): Promise<Book[]> {
  const cacheKey = `category-${category}-${maxResults}-${orderBy}`;
  
  return fetchWithCache(cacheKey, async () => {
    const response = await fetch(
      `${BASE_URL}?q=subject:${encodeURIComponent(category)}&maxResults=${maxResults * 2}&orderBy=${orderBy}&key=${getNextApiKey()}`
    );
    
    const data = await validateApiResponse(response);
    return data.items
      ?.map(mapBookData)
      .filter((book): book is Book => book !== null)
      .slice(0, maxResults) || [];
  }, sampleBooks);
}

export async function getBookDetails(bookId: string): Promise<BookDetails> {
  const cacheKey = `book-details-${bookId}`;
  
  return fetchWithCache(cacheKey, async () => {
    const response = await fetch(`${BASE_URL}/${bookId}?key=${getNextApiKey()}`);
    const item = await validateApiResponse(response);
    
    const coverUrl = getHighQualityCover(item.volumeInfo?.imageLinks);
    if (!coverUrl) throw new Error('Book has no image');

    const isUsed = determineBookCondition(item.saleInfo);

    return {
      id: item.id,
      title: item.volumeInfo?.title || 'Untitled',
      subtitle: item.volumeInfo?.subtitle || '',
      authors: item.volumeInfo?.authors || ['Unknown Author'],
      description: item.volumeInfo?.description || 'No description available',
      coverUrl,
      rating: item.volumeInfo?.averageRating || Math.floor(Math.random() * 2) + 3,
      ratingsCount: item.volumeInfo?.ratingsCount || Math.floor(Math.random() * 1000),
      reviewCount: item.volumeInfo?.ratingsCount || Math.floor(Math.random() * 1000),
      categories: item.volumeInfo?.categories || [],
      pageCount: item.volumeInfo?.pageCount || 0,
      publisher: item.volumeInfo?.publisher || 'Unknown Publisher',
      publishedDate: item.volumeInfo?.publishedDate || '',
      isbn: item.volumeInfo?.industryIdentifiers?.[0]?.identifier || '',
      language: item.volumeInfo?.language || 'en',
      isUsed: isUsed,
      reviews: [],
      condition: isUsed ? 'Good' : 'New',
      format: item.saleInfo?.isEbook ? 'Ebook' : 'Paperback',
      downloadLink: item.accessInfo?.epub?.downloadLink || item.accessInfo?.pdf?.downloadLink,
      previewLink: item.volumeInfo?.previewLink,
      amazonLink: item.saleInfo?.buyLink
    };
  }, sampleBookDetails);
}