import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-300 mb-6">Stay updated with our latest books and exclusive offers</p>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Subscribe Now
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold">FineBooks Corner</span>
            </Link>
            <p className="text-gray-300">
              Discover your next great read and join our community of book lovers.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-500">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-emerald-500">About Us</Link></li>
              <li><Link to="/categories" className="text-gray-300 hover:text-emerald-500">Categories</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-emerald-500">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-emerald-500">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-emerald-500">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-emerald-500">Terms & Conditions</Link></li>
              <li><Link to="/copyright" className="text-gray-300 hover:text-emerald-500">Copyright Notice</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>71-75 Shelton Street</li>
              <li>Covent Garden</li>
              <li>London, WC2H 9JQ</li>
              <li>Phone: +44 7487531763</li>
              <li>Email: contact@finebookscorner.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 text-center text-sm text-gray-300">
          <p>© {currentYear} FineBooks Corner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}