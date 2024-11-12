import React from 'react';
import { SortOption } from '../types/book';

interface BookSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function BookSort({ value, onChange }: BookSortProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption)}
      className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
    >
      <option value="relevance">Relevance</option>
      <option value="newest">Newest</option>
    </select>
  );
}