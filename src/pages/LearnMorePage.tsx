import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, BookMarked, Heart, Search, Newspaper
} from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Browse Books',
    description: 'Explore our vast collection of books with advanced search and filtering options.',
    link: '/browse-books'
  },
  {
    icon: BookMarked,
    title: 'Categories',
    description: 'Browse books by genre, from fiction to academic texts and everything in between.',
    link: '/categories'
  },
  {
    icon: Heart,
    title: 'Favorites',
    description: 'Save your favorite books and create personalized reading lists.',
    link: '/favorites'
  },
  {
    icon: Newspaper,
    title: 'Blog & Articles',
    description: 'Read expert articles about books, authors, and reading tips.',
    link: '/blog'
  }
];

const quickLinks = [
  { name: 'About Us', link: '/about' },
  { name: 'FAQ', link: '/faq' },
  { name: 'Sign Up', link: '/signup' }
];

export function LearnMorePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Welcome to FineBooks Corner
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Your digital reading companion that helps you discover your next favorite book. Browse through our extensive collection of books across all genres.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/browse-books"
                className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Browse Books
              </Link>
              <Link
                to="/signup"
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy">
              Discover Books Your Way
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              FineBooks Corner offers multiple ways to find your perfect read
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <feature.icon className="h-8 w-8 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">
              Why Choose FineBooks Corner?
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">
                We're passionate about connecting readers with their next great book. Our platform offers:
              </p>
              <ul className="text-left text-lg text-gray-600 space-y-4">
                <li className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span>Extensive collection of books across all genres</span>
                </li>
                <li className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span>Advanced search and filtering options</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span>Personalized reading lists and favorites</span>
                </li>
                <li className="flex items-center gap-2">
                  <Newspaper className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span>Regular blog posts about books and reading</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">
            Ready to Find Your Next Book?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join FineBooks Corner today and discover books you'll love.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            <span>Create Your Account</span>
          </Link>
        </div>
      </section>
    </main>
  );
}