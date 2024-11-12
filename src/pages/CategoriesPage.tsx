import React from 'react';
import { Link } from 'react-router-dom';
import { Book, ChevronRight } from 'lucide-react';

const categories = [
  {
    name: 'Fiction',
    description: 'Explore imaginative worlds and compelling narratives',
    subcategories: ['Literary Fiction', 'Contemporary Fiction', 'Historical Fiction', 'Romance', 'Mystery', 'Science Fiction', 'Fantasy'],
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Non-Fiction',
    description: 'Discover real-world knowledge and insights',
    subcategories: ['Biography', 'History', 'Science', 'Self-Help', 'Business', 'Philosophy', 'Psychology'],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Children\'s Books',
    description: 'Inspire young minds with engaging stories',
    subcategories: ['Picture Books', 'Early Readers', 'Middle Grade', 'Young Adult', 'Educational', 'Activity Books'],
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Academic',
    description: 'Support your studies with comprehensive resources',
    subcategories: ['Textbooks', 'Reference', 'Study Guides', 'Research Papers', 'Academic Journals'],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
  },
];

export function CategoriesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-navy mb-4">Book Categories</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our vast collection of books across various genres and subjects
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {categories.map((category) => (
          <div key={category.name} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
                <p className="text-gray-200">{category.description}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {category.subcategories.map((subcategory) => (
                  <Link
                    key={subcategory}
                    to={`/category/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    <Book className="h-4 w-4" />
                    <span>{subcategory}</span>
                  </Link>
                ))}
              </div>
              <Link
                to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="mt-6 inline-flex items-center text-emerald-600 hover:text-emerald-700"
              >
                <span>View all {category.name} books</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}