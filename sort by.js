/**
 * @typedef {null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }} JSONValue
 */

/**
 * @typedef {(value: JSONValue) => number} Fn
 */

/**
 * @param {JSONValue[]} arr
 * @param {Fn} fn
 * @returns {JSONValue[]}
 */
function sortBy(arr, fn) {
    arr.sort((a, b) => fn(a) - fn(b));
    return arr;
  }
  