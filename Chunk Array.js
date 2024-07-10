/**
 * @typedef {null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }} JSONValue
 */

/**
 * @typedef {Record<string, JSONValue> | Array<JSONValue>} Obj
 */

/**
 * Chunks an array into smaller arrays of the specified size.
 *
 * @param {Obj[]} arr - The array to be chunked.
 * @param {number} size - The size of each chunk.
 * @return {Obj[][]} The chunked array.
 */
function chunk(arr, size) {
    const ans = [];
    for (let i = 0; i < arr.length; i += size) {
      ans.push(arr.slice(i, i + size));
    }
    return ans;
  }
  