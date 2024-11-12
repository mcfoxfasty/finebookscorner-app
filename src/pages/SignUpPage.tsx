import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, User } from 'lucide-react';

export function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <BookOpen className="h-12 w-12 text-emerald-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-navy">Join FineBooks Corner</h2>
          <p className="mt-2 text-gray-600">
            Subscribe to discover great books and stay updated
          </p>
        </div>

        <form 
          action="https://gmail.us12.list-manage.com/subscribe/post?u=48a85121646dc2688e0c17f88&amp;id=b9c2081709&amp;f_id=0088f2e6f0" 
          method="post" 
          target="_blank"
          className="mt-8 space-y-6"
        >
          {/* Hidden field for bot protection */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_48a85121646dc2688e0c17f88_b9c2081709" tabIndex={-1} />
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-gray-700">
                Email address <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative">
                <input
                  id="mce-EMAIL"
                  name="EMAIL"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <label htmlFor="mce-FNAME" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <div className="mt-1 relative">
                <input
                  id="mce-FNAME"
                  name="FNAME"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <User className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <label htmlFor="mce-LNAME" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <div className="mt-1 relative">
                <input
                  id="mce-LNAME"
                  name="LNAME"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
                <User className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Subscribe
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            By subscribing, you agree to our{' '}
            <Link to="/privacy-policy" className="text-emerald-600 hover:text-emerald-500">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/terms" className="text-emerald-600 hover:text-emerald-500">
              Terms of Service
            </Link>
          </p>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already subscribed?{' '}
            <Link to="/login" className="font-medium text-emerald-600 hover:text-emerald-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}