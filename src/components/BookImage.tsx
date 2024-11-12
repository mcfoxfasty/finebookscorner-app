import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface BookImageProps {
  src: string;
  alt: string;
  className?: string;
  isUsed?: boolean;
}

export function BookImage({ src, alt, className = '', isUsed = false }: BookImageProps) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Convert Google Books thumbnail to high-quality image URL
  const highQualityUrl = src.replace(/&zoom=\d+/, '&zoom=3').replace(/&edge=curl/, '');

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg" />
      )}
      {isError ? (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
          <ImageOff className="h-12 w-12 text-gray-400" />
        </div>
      ) : (
        <img
          src={highQualityUrl}
          alt={alt}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsError(true);
            setIsLoading(false);
          }}
        />
      )}
      {isUsed && (
        <div className="absolute top-4 right-4">
          <span className="bg-gray-900/75 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            USED
          </span>
        </div>
      )}
    </div>
  );
}