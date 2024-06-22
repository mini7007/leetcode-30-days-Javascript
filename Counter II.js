function createCounter(init) {
    let cur = init;
    return {
      increment: () => ++cur,
      decrement: () => --cur,
      reset: () => (cur = init),
    };
  }
  