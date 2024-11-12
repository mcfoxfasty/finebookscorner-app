import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

export function ArticleSection() {
  // Show only the latest 3 articles
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-navy">Latest Articles</h2>
          <Link 
            to="/blog" 
            className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-2"
          >
            <span>VIEW ALL</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime} min read</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-emerald-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <Link 
                  to={`/blog/article/${article.id}`}
                  className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-2"
                >
                  <span>READ MORE</span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}