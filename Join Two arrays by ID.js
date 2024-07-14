/**
 * @typedef {Object.<string, any>} JSONValue
 */

/**
 * @typedef {Object.<string, JSONValue> & { id: number }} Item
 */

/**
 * Joins two arrays of items, merging objects with the same id.
 * @param {Item[]} arr1 - First array of items.
 * @param {Item[]} arr2 - Second array of items.
 * @returns {Item[]} - The merged array of items.
 */
function join(arr1, arr2) {
  const idToObj = {};
  for (const item of arr1) {
    idToObj[item.id] = item;
  }
  for (const item of arr2) {
    if (idToObj[item.id] === undefined) {
      idToObj[item.id] = item;
    } else {
      for (const key of Object.keys(item)) {
        idToObj[item.id][key] = item[key];
      }
    }
  }
  const ans = Object.values(idToObj);
  ans.sort((a, b) => a.id - b.id);
  return ans;
}
