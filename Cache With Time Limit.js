class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const now = Date.now();
    const exists = this.getValue(now, key) !== undefined;
    this.cache.set(key, { value: value, expiredAt: now + duration });
    return exists;
  }

  get(key) {
    const val = this.getValue(Date.now(), key);
    return val === undefined ? -1 : val.value;
  }

  count() {
    const now = Date.now();
    for (const key of this.cache.keys()) {
      if (this.getValue(now, key) === undefined) {
        this.cache.delete(key);
      }
    }
    return this.cache.size;
  }

  getValue(now, key) {
    const val = this.cache.get(key);
    return val && now <= val.expiredAt ? val : undefined;
  }
}
