import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ChevronLeft } from 'lucide-react';
import { articles } from '../data/articles';

export function ArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <Link to="/blog" className="text-emerald-600 hover:text-emerald-700">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link
        to="/blog"
        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
      >
        <ChevronLeft className="h-5 w-5" />
        <span>Back to Blog</span>
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{article.readTime} min read</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">{article.title}</h1>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="font-medium text-gray-900">{article.author.name}</div>
            <p className="text-sm text-gray-600">{article.author.bio}</p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="aspect-[2/1] mb-12">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-emerald max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {article.tags.map(tag => (
          <Link
            key={tag}
            to={`/blog/tag/${tag}`}
            className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
          >
            <Tag className="h-4 w-4" />
            {tag}
          </Link>
        ))}
      </div>
    </main>
  );
}