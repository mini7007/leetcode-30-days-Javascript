/**
 * @typedef {function(number): number} F
 */

/**
 * Composes an array of functions from right to left.
 * @param {F[]} functions - An array of functions to compose.
 * @returns {F} - A function that is the composition of the input functions.
 */
function compose(functions) {
  return function (x) {
    return functions.reduceRight((val, f) => f(val), x);
  };
}
