/**
 * @typedef {null | boolean | number | string | JSONValue[] | {[key: string]: JSONValue}} JSONValue
 */

/**
 * @typedef {(...args: JSONValue[]) => JSONValue | undefined} OnceFn
 */

/**
 * Creates a function that can only be called once.
 * @param {Function} fn - The function to be called only once.
 * @returns {OnceFn} - The function that can only be called once.
 */
function once(fn) {
  let isCalled = false;
  return function (...args) {
    if (isCalled) {
      return;
    }
    isCalled = true;
    return fn(...args);
  };
}
