import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X, Heart } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favorites } = useFavorites();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories' },
    { label: 'Blog', href: '/blog' },
    { label: 'About Us', href: '/about' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-emerald-600">FineBooks Corner</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-gray-600 hover:text-emerald-600 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Link 
                to="/favorites" 
                className="relative p-2 text-gray-600 hover:text-emerald-600"
              >
                <Heart className="h-6 w-6" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {favorites.length}
                  </span>
                )}
              </Link>
              <button
                className="md:hidden p-2 text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-2 text-gray-600 hover:text-emerald-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/favorites"
                className="block py-2 text-gray-600 hover:text-emerald-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Favorite Books ({favorites.length})
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}