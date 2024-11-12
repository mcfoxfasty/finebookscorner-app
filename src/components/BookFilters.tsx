import React from 'react';
import { BookFilters } from '../types/book';
import { Search, SlidersHorizontal } from 'lucide-react';
import { FilterSelect } from './filters/FilterSelect';
import { PriceRangeFilter } from './filters/PriceRangeFilter';
import { SearchInput } from './filters/SearchInput';

interface BookFiltersProps {
  filters: BookFilters;
  onFiltersChange: (filters: BookFilters) => void;
}

export function BookFilters({ filters, onFiltersChange }: BookFiltersProps) {
  const [showFilters, setShowFilters] = React.useState(false);

  const handleChange = (key: keyof BookFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <SearchInput
          value={filters.searchQuery}
          onChange={(value) => handleChange('searchQuery', value)}
        />
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-white rounded-lg shadow-sm">
          <PriceRangeFilter
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice}
            onMinPriceChange={(value) => handleChange('minPrice', value)}
            onMaxPriceChange={(value) => handleChange('maxPrice', value)}
          />

          <FilterSelect
            label="Format"
            value={filters.format}
            onChange={(value) => handleChange('format', value)}
            options={[
              { value: 'all', label: 'All Formats' },
              { value: 'ebook', label: 'eBooks' },
              { value: 'pdf', label: 'PDF' },
              { value: 'epub', label: 'EPUB' }
            ]}
          />

          <FilterSelect
            label="Availability"
            value={filters.availability}
            onChange={(value) => handleChange('availability', value)}
            options={[
              { value: 'all', label: 'All' },
              { value: 'free', label: 'Free' },
              { value: 'paid', label: 'Paid' },
              { value: 'for_sale', label: 'For Sale' }
            ]}
          />

          <FilterSelect
            label="Sort By"
            value={filters.sortBy}
            onChange={(value) => handleChange('sortBy', value)}
            options={[
              { value: 'relevance', label: 'Relevance' },
              { value: 'newest', label: 'Newest' },
              { value: 'price_asc', label: 'Price: Low to High' },
              { value: 'price_desc', label: 'Price: High to Low' }
            ]}
          />
        </div>
      )}
    </div>
  );
}