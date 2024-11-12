import React, { useState } from 'react';
import { Share2, Facebook } from 'lucide-react';

export function PromotionBanner() {
  const [showShareMenu, setShowShareMenu] = useState(false);

  const shareOptions = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent('Join me in discovering great books on FineReads! 📚')}&url=${encodeURIComponent(window.location.href)}`
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('FineReads - Your Reading Community')}`
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent('Check out FineReads - A great community for book lovers! ' + window.location.href)}`
    }
  ];

  const handleShare = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
    setShowShareMenu(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-pink-100 rounded-lg p-8 relative">
        <h3 className="text-2xl font-bold text-navy mb-4">Share the joy of reading!</h3>
        <div className="relative">
          <button 
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Share2 className="h-5 w-5" />
            <span>SHARE FINEREADS</span>
          </button>
          
          {showShareMenu && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => handleShare(option.url)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  {option.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-navy rounded-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">JOIN OUR FACEBOOK COMMUNITY</h3>
        <div className="flex justify-between items-center">
          <p className="text-xl">Connect with fellow readers</p>
          <a
            href="https://facebook.com/groups/finereads"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#1877F2] text-white px-6 py-2 rounded-lg hover:bg-[#1864D9] transition-colors"
          >
            <Facebook className="h-5 w-5" />
            <span>JOIN NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
}