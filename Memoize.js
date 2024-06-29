/**
 * @typedef {(...params: number[]) => number} Fn
 */

/**
 * Memoizes a function.
 * @param {Fn} fn The function to memoize.
 * @return {Fn} The memoized function.
 */
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = args.join(' ');
    if (cache[key] === undefined) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}
