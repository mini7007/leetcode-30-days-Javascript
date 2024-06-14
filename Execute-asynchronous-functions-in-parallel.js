/**
 * @template T
 * @typedef {() => Promise<T>} Fn
 */

/**
 * @template T
 * @param {Fn<T>[]} functions
 * @return {Promise<T[]>}
 */
function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const ans = [];
    let resolveCount = 0;
    functions.forEach((fn, index) => {
      fn()
        .then((val) => {
          ans[index] = val;
          if (++resolveCount === functions.length) {
            resolve(ans);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
