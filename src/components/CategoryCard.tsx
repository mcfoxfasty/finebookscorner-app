import { Book } from 'lucide-react';
import { BookCategory } from '../types/book';

interface CategoryCardProps {
  category: BookCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{category.count} books</p>
        </div>
        <Book className="w-8 h-8 text-indigo-600" />
      </div>
    </div>
  );
}