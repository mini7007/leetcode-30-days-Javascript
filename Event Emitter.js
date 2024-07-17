class EventEmitter {
  constructor() {
    this.eventToCallbacks = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.eventToCallbacks.has(eventName))
      this.eventToCallbacks.set(eventName, []);

    const callbacks = this.eventToCallbacks.get(eventName);
    callbacks.push(callback);

    return {
      unsubscribe: () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) {
          callbacks.splice(index, 1);
        }
      },
    };
  }

  emit(eventName, args = []) {
    const callbacks = this.eventToCallbacks.get(eventName);
    if (callbacks === undefined) {
      return [];
    }
    return callbacks.map((callback) => callback(...args));
  }
}
