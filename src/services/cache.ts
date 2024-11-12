interface CacheItem<T> {
  data: T;
  timestamp: number;
}

interface Cache {
  [key: string]: CacheItem<any>;
}

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour
const cache: Cache = {};

export function getCachedData<T>(key: string): T | null {
  const item = cache[key];
  if (!item) return null;

  const isExpired = Date.now() - item.timestamp > CACHE_DURATION;
  if (isExpired) {
    delete cache[key];
    return null;
  }

  return item.data;
}

export function setCachedData<T>(key: string, data: T): void {
  cache[key] = {
    data,
    timestamp: Date.now()
  };
}