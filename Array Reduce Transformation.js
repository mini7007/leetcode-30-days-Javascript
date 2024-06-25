/**
 * @typedef {function(number, number): number} Fn
 */

/**
 * @param {number[]} nums
 * @param {Fn} fn
 * @param {number} init
 * @return {number}
 */
function reduce(nums, fn, init) {
  let ans = init;
  for (const num of nums) {
    ans = fn(ans, num);
  }
  return ans;
}
