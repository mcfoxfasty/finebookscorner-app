import { useState, useEffect } from 'react';

interface CacheItem<T> {
  data: T;
  timestamp: number;
}

interface Cache<T> {
  [key: string]: CacheItem<T>;
}

const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

export function useBookCache<T>(key: string, fetchFn: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cache: Cache<T> = JSON.parse(localStorage.getItem('bookCache') || '{}');
    const cachedItem = cache[key];
    
    const isCacheValid = cachedItem && 
      (Date.now() - cachedItem.timestamp) < CACHE_DURATION;

    const loadData = async () => {
      if (isCacheValid) {
        setData(cachedItem.data);
        setIsLoading(false);
        return;
      }

      try {
        const freshData = await fetchFn();
        setData(freshData);
        
        // Update cache
        const newCache = {
          ...cache,
          [key]: {
            data: freshData,
            timestamp: Date.now()
          }
        };
        localStorage.setItem('bookCache', JSON.stringify(newCache));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [key, fetchFn]);

  return { data, isLoading, error };
}