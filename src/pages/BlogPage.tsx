import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { articles } from '../data/articles';

// Get unique tags from all articles
const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter articles based on search query and selected tag
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = !selectedTag || article.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Article */}
      <div className="mb-16">
        <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-8">
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-emerald-500 px-3 py-1 rounded-full text-sm">
                {articles[0].category}
              </span>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(articles[0].date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{articles[0].author.name}</span>
              </div>
            </div>
            <Link to={`/blog/article/${articles[0].id}`}>
              <h1 className="text-4xl font-bold mb-4 hover:text-emerald-400 transition-colors">
                {articles[0].title}
              </h1>
            </Link>
            <p className="text-lg text-gray-200 mb-6">{articles[0].excerpt}</p>
            <Link 
              to={`/blog/article/${articles[0].id}`}
              className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300"
            >
              <span>Read More</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-sm ${
              !selectedTag
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Topics
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                selectedTag === tag
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Tag className="h-3 w-3" />
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.slice(1).map((article) => (
          <article key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
            <Link to={`/blog/article/${article.id}`}>
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString()}
                </time>
              </div>
              <Link to={`/blog/article/${article.id}`}>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {article.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700">{article.author.name}</span>
                </div>
                <Link
                  to={`/blog/article/${article.id}`}
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}