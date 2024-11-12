export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  rating: number;
  reviewCount: number;
  categories: string[];
  publishedDate: string;
  isUsed: boolean;
  reviews: Review[];
  condition?: BookCondition;
  format?: BookFormat;
  edition?: string;
  rarity?: RarityLevel;
  readingStatus?: ReadingStatus;
  readingProgress?: number;
  collectionTags?: string[];
  notes?: string;
  previewLink?: string;
  downloadLink?: string;
  amazonLink?: string;
}

export interface BookDetails extends Omit<Book, 'author'> {
  subtitle: string;
  authors: string[];
  ratingsCount: number;
  pageCount: number;
  publisher: string;
  isbn: string;
  language: string;
  binding?: string;
  printRun?: string;
  specialFeatures?: string[];
  previewLink?: string;
  downloadLink?: string;
  infoLink?: string;
  amazonLink?: string;
}

export type BookCondition = 'New' | 'Like New' | 'Very Good' | 'Good' | 'Fair' | 'Poor';

export type BookFormat = 'Hardcover' | 'Paperback' | 'Ebook' | 'Audiobook';

export type RarityLevel = 'Common' | 'Uncommon' | 'Rare' | 'Very Rare' | 'Unique';

export type ReadingStatus = 'To Read' | 'Reading' | 'Completed' | 'DNF';

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export type SortOption = 'relevance' | 'newest' | 'price_asc' | 'price_desc';

export interface BookFilters {
  category?: string;
  sortBy: SortOption;
  searchQuery: string;
  condition?: BookCondition;
  format?: BookFormat;
  minPrice?: number;
  maxPrice?: number;
  rarity?: RarityLevel;
  readingStatus?: ReadingStatus;
}

export interface CategoryCount {
  name: string;
  count: number;
}

export interface BookCategory {
  name: string;
  count: number;
  description: string;
}