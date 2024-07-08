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

// Example usage:

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function example() {
  const functions = [
    () => delay(100).then(() => "one"),
    () => delay(200).then(() => "two"),
    () => delay(300).then(() => "three"),
  ];

  try {
    const result = await promiseAll(functions);
    console.log(result); // Output: ['one', 'two', 'three']
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

example();
