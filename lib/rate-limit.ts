const buckets = new Map<string, number[]>()

export const rateLimit = (key: string, limit: number, windowMs: number) => {
    const now = Date.now()
    const hits = (buckets.get(key) ?? []).filter(time => now - time < windowMs)

    if (hits.length >= limit) {
        buckets.set(key, hits)

        return false
    }

    hits.push(now)
    buckets.set(key, hits)
    
    if (buckets.size > 5000) {
        for (const [bucketKey, times] of buckets) {
            if (times.every(time => now - time >= windowMs)) {
                buckets.delete(bucketKey)
            }
        }
    }

    return true
}