import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { BookBrowser } from '../components/BookBrowser';
import { BookSection } from '../components/BookSection';
import { CategorySection } from '../components/CategorySection';
import { CategoryBrowser } from '../components/CategoryBrowser';
import { ArticleSection } from '../components/ArticleSection';
import { PromotionBanner } from '../components/PromotionBanner';
import { getEditorsPicks } from '../services/books';
import { Book } from '../types/book';

export function HomePage() {
  const [editorsPicks, setEditorsPicks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        // Load editor's picks
        const picks = await getEditorsPicks();
        setEditorsPicks(picks);
      } catch (error) {
        console.error('Error loading books:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBooks();
  }, []);

  return (
    <main>
      <Hero />
      <Stats />
      <CategoryBrowser />
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8">Browse Our Collection</h2>
          <BookBrowser />
        </div>
      </section>
      <BookSection 
        title="Editor's Picks" 
        books={editorsPicks} 
        viewAllLink="/editors-picks" 
      />
      <CategorySection category="Mystery" viewAllLink="/category/mystery" />
      <CategorySection category="Romance" viewAllLink="/category/romance" />
      <CategorySection category="Science Fiction" viewAllLink="/category/science-fiction" />
      <PromotionBanner />
      <ArticleSection />
    </main>
  );
}