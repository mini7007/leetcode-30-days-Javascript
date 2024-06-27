/**
 * @typedef {null | boolean | number | string | JSONValue[] | {[key: string]: JSONValue}} JSONValue
 */

/**
 * @param {...JSONValue} args
 * @returns {number}
 */
function argumentsLength(...args) {
    return args.length;
  }
  