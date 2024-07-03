function cancellable(fn, args, t) {
  const timer = setTimeout(() => fn(...args), t);
  return function () {
    clearTimeout(timer);
  };
}
