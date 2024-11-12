import React from 'react';
import { CategoryCount } from '../types/book';

interface CategorySidebarProps {
  categories: CategoryCount[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export function CategorySidebar({
  categories,
  selectedCategory,
  onCategorySelect
}: CategorySidebarProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
      <div className="space-y-2">
        <button
          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
            selectedCategory === ''
              ? 'bg-emerald-50 text-emerald-700'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => onCategorySelect('')}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category.name}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedCategory === category.name
                ? 'bg-emerald-50 text-emerald-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => onCategorySelect(category.name)}
          >
            <span>{category.name}</span>
            <span className="float-right text-sm text-gray-400">
              {category.count.toLocaleString()}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}