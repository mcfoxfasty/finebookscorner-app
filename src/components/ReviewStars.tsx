import React from 'react';
import { Star } from 'lucide-react';

interface ReviewStarsProps {
  rating: number;
  size?: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

export function ReviewStars({ rating, size = 16, interactive = false, onRatingChange }: ReviewStarsProps) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => interactive && onRatingChange?.(star)}
          className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} 
            transition-transform`}
          disabled={!interactive}
          aria-label={`Rate ${star} stars`}
        >
          <Star
            size={size}
            className={`${
              star <= rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  );
}