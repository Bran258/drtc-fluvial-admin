type CacheStore = Record<string, any>;

const cacheStore: CacheStore = {};

export function getCache<T>(key: string): T | null {
    return cacheStore[key] ?? null;
}

export function setCache<T>(key: string, data: T): void {
    cacheStore[key] = data;
}

export function clearCache(key?: string): void {
    if (key) {
        delete cacheStore[key];
    } else {
        Object.keys(cacheStore).forEach((k) => delete cacheStore[k]);
    }
}