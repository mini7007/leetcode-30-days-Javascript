function map(arr, fn) {
  const ans = [];
  arr.forEach((a, index) => {
    ans.push(fn(a, index));
  });
  return ans;
}
