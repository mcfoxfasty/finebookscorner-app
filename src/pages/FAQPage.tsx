import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const faqs = [
  {
    category: 'Reading Experience',
    questions: [
      {
        q: 'How do I track my reading progress?',
        a: 'You can track your reading progress by updating the progress bar on each book\'s page. This helps you keep track of where you are in your current reads and maintain a reading history.',
      },
      {
        q: 'Can I create reading lists?',
        a: 'Yes! You can create custom reading lists by adding books to your collections. Create different lists for genres, themes, or reading goals.',
      },
      {
        q: 'How do I find book recommendations?',
        a: 'We offer personalized recommendations based on your reading history, ratings, and preferences. You can also explore curated lists, browse by genre, or see what other readers with similar tastes are enjoying.',
      },
    ],
  },
  {
    category: 'Community Features',
    questions: [
      {
        q: 'How can I connect with other readers?',
        a: 'Join our reading community by participating in book discussions, following other readers, and sharing your reviews. You can also join or create reading groups based on your interests.',
      },
      {
        q: 'Can I share my reviews?',
        a: 'Absolutely! You can write reviews, rate books, and share your thoughts with the community. Your reviews help other readers discover great books.',
      },
      {
        q: 'What are reading challenges?',
        a: 'Reading challenges are fun community events where you can set reading goals, track your progress, and earn badges. Join monthly or yearly challenges to discover new books and stay motivated.',
      },
    ],
  },
  {
    category: 'Account & Features',
    questions: [
      {
        q: 'How do I customize my reading preferences?',
        a: 'Visit your account settings to set up your favorite genres, authors, and reading preferences. This helps us provide better book recommendations and a more personalized experience.',
      },
      {
        q: 'Can I sync my reading progress across devices?',
        a: 'Yes, your reading progress, collections, and preferences automatically sync across all your devices when you\'re signed in to your account.',
      },
      {
        q: 'What are reading insights?',
        a: 'Reading insights provide analytics about your reading habits, including pages read, books completed, favorite genres, and reading streaks. Use these insights to track your reading journey.',
      },
    ],
  },
];

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-navy mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Find answers to common questions about using FineBooks Corner
        </p>
        <div className="relative max-w-xl mx-auto">
          <input
            type="search"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </header>

      <div className="space-y-8">
        {filteredFaqs.map((category) => (
          <section key={category.category}>
            <h2 className="text-2xl font-bold text-navy mb-4">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((item) => (
                <div
                  key={item.q}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(item.q)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-900">{item.q}</span>
                    {openQuestions.includes(item.q) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openQuestions.includes(item.q) && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-600">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact Section */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-navy mb-4">
          Still have questions?
        </h2>
        <p className="text-gray-600 mb-6">
          Join our community forum to connect with other readers or reach out to our support team.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            Join Community Forum
          </button>
          <button className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
            Contact Support
          </button>
        </div>
      </section>
    </main>
  );
}