import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { BookDetailsPage } from './pages/BookDetailsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ArticlePage } from './pages/ArticlePage';
import { FAQPage } from './pages/FAQPage';
import { LearnMorePage } from './pages/LearnMorePage';
import { SignUpPage } from './pages/SignUpPage';
import { BrowseBooksPage } from './pages/BrowseBooksPage';
import { FavoriteBooksPage } from './pages/FavoriteBooksPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CopyrightPage } from './pages/CopyrightPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/book/:bookId" element={<BookDetailsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/article/:articleId" element={<ArticlePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/browse-books" element={<BrowseBooksPage />} />
        <Route path="/favorites" element={<FavoriteBooksPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
      </Routes>
      <Footer />
    </div>
  );
}