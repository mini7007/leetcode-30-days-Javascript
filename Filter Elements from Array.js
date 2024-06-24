/**
 * @typedef {(n: number, i: number) => any} Fn
 */

/**
 * Filters an array based on a provided function.
 * @param {number[]} arr - The array to filter.
 * @param {Fn} fn - The function used to test each element.
 * @returns {number[]} - The filtered array.
 */
function filter(arr, fn) {
  const ans = [];
  arr.forEach((a, index) => {
    if (fn(a, index)) {
      ans.push(a);
    }
  });
  return ans;
}
