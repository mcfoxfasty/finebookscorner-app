import React from 'react';
import { Review } from '../types/book';
import { ReviewStars } from './ReviewStars';

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">
                  {review.userName.charAt(0)}
                </span>
              </div>
              <span className="font-semibold text-gray-900">{review.userName}</span>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
          <ReviewStars rating={review.rating} />
          <p className="mt-2 text-gray-600">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}