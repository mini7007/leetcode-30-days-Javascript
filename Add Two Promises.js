async function addTwoPromises(promise1, promise2) {
  const results = await Promise.all([promise1, promise2]);
  return results[0] + results[1];
}
