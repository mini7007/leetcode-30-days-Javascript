function cancellable(fn, args, t) {
  fn(...args);
  const timer = setInterval(() => fn(...args), t);
  return function () {
    clearInterval(timer);
  };
}
