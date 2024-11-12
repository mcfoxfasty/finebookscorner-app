import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';

const allCategories = [
  {
    name: 'Fiction & Literature',
    items: ['Fiction', 'Classics', 'Historical Fiction', 'Romance', 'Science Fiction', 'Fantasy', 'Horror', 'Mystery', 'Thriller']
  },
  {
    name: 'Non-Fiction',
    items: ['Biography', 'History', 'Science', 'Psychology', 'Self Help', 'Business', 'Cookbooks']
  },
  {
    name: 'Special Interests',
    items: ['Art', 'Music', 'Poetry', 'Travel', 'Sports', 'Christian']
  },
  {
    name: 'Young Readers',
    items: ['Children\'s', 'Young Adult', 'Comics', 'Graphic Novels']
  }
];

export function CategoryBrowser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return allCategories;

    const query = searchQuery.toLowerCase();
    return allCategories.map(group => ({
      ...group,
      items: group.items.filter(item => 
        item.toLowerCase().includes(query)
      )
    })).filter(group => group.items.length > 0);
  }, [searchQuery]);

  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">Discover Your Next</span>{' '}
            <span className="text-emerald-400">Great Read</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder="Search by category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((group) => (
            <div key={group.name} className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">{group.name}</h3>
              <ul className="space-y-2">
                {group.items.map((category) => (
                  <li key={category}>
                    <Link
                      to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                        hoveredCategory === category
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'text-gray-300 hover:bg-white/5'
                      }`}
                      onMouseEnter={() => setHoveredCategory(category)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <span>{category}</span>
                      <ChevronRight className={`h-4 w-4 transition-opacity ${
                        hoveredCategory === category ? 'opacity-100' : 'opacity-0'
                      }`} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            to="/categories"
            className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200"
          >
            <span>View All Categories</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}