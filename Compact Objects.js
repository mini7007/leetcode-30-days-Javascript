/**
 * @typedef {null | boolean | number | string | JSONValue[] | {[key: string]: JSONValue}} JSONValue
 */

/**
 * @typedef {Object.<string, JSONValue> | JSONValue[]} Obj
 */

/**
 * Compacts the given object by removing falsy values and processing nested structures.
 *
 * @param {Obj} obj - The object to compact.
 * @returns {Obj} The compacted object.
 */
function compactObject(obj) {
  return dfs(obj);
}

/**
 * Depth-first search to process and compact the JSON value.
 *
 * @param {JSONValue} value - The JSON value to process.
 * @returns {JSONValue} The processed value.
 */
function dfs(value) {
  if (value === null) {
    return null;
  }
  if (Array.isArray(value)) {
    return value.filter(Boolean).map(dfs);
  }
  if (typeof value === "object") {
    for (const key in value) {
      if (Boolean(value[key])) {
        value[key] = dfs(value[key]);
      } else {
        delete value[key];
      }
    }
  }
  return value;
}
