/**
 * @typedef {number | MultiDimensionalArray} MultiDimensionalArray
 */

/**
 * @param {MultiDimensionalArray} arr
 * @param {number} n
 * @return {MultiDimensionalArray}
 */
var flat = function (arr, n) {
  function dfs(arr, n) {
    if (typeof arr === "number") {
      ans.push(arr);
    } else if (n === 0) {
      for (const element of arr) {
        ans.push(element);
      }
    } else {
      for (const element of arr) {
        dfs(element, n - 1);
      }
    }
  }
  const ans = [];
  dfs(arr, n);
  return ans;
};
