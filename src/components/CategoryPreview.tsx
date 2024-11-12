import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface CategoryPreviewProps {
  title: string;
  categories: string[];
  hoveredCategory: string | null;
  onHover: (category: string | null) => void;
}

export function CategoryPreview({ title, categories, hoveredCategory, onHover }: CategoryPreviewProps) {
  return (
    <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                hoveredCategory === category
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'text-gray-300 hover:bg-white/5'
              }`}
              onMouseEnter={() => onHover(category)}
              onMouseLeave={() => onHover(null)}
            >
              <BookOpen className="h-4 w-4" />
              <span>{category}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}