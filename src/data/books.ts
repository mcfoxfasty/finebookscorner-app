import { Book, BookDetails } from '../types/book';

export const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 24.99,
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
    reviewCount: 2891,
    reviews: [],
    categories: ['Fiction', 'Fantasy'],
    publishedDate: '2020-08-13',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever...',
    isUsed: true
  },
  {
    id: '2',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    price: 22.99,
    coverUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviewCount: 1567,
    reviews: [],
    categories: ['Science Fiction'],
    publishedDate: '2021-05-04',
    description: 'A lone astronaut must save humanity from extinction in this thrilling sci-fi adventure...',
    isUsed: true
  },
  {
    id: '3',
    title: 'Demon Copperhead',
    author: 'Barbara Kingsolver',
    price: 19.99,
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviewCount: 982,
    reviews: [],
    categories: ['Fiction', 'Contemporary'],
    publishedDate: '2022-10-18',
    description: 'A powerful coming-of-age novel set in Appalachia...',
    isUsed: true
  }
];

export const editorsPickBooks: Book[] = [
  {
    id: '4',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    price: 23.99,
    coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviewCount: 1243,
    reviews: [],
    categories: ['Fiction', 'Literary Fiction'],
    publishedDate: '2022-07-05',
    description: 'A modern masterpiece about love, friendship, and the power of games...',
    isUsed: true
  },
  {
    id: '5',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    price: 21.99,
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewCount: 3456,
    reviews: [],
    categories: ['Fiction', 'Historical Fiction'],
    publishedDate: '2017-06-13',
    description: 'A mesmerizing novel about old Hollywood and forbidden love...',
    isUsed: true
  }
];

export const sampleBookDetails: BookDetails = {
  id: '1',
  title: 'The Midnight Library',
  subtitle: 'A Novel',
  authors: ['Matt Haig'],
  description: 'Between life and death there is a library, and within that library, the shelves go on forever...',
  coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
  rating: 4.5,
  ratingsCount: 2891,
  reviewCount: 2891,
  price: 24.99,
  categories: ['Fiction', 'Fantasy'],
  pageCount: 304,
  publisher: 'Viking',
  publishedDate: '2020-08-13',
  isbn: '9780525559474',
  language: 'en',
  isUsed: true,
  reviews: []
};