export interface Event<T> {
    listeners: Array<(eventData: T) => void>;
  
    on(listener: (eventData: T) => void): void;
    off(listener: (eventData: T) => void): void;
    emit(eventData: T): void;
  }
  
  export function createEvent<T>(): Event<T> {
    const listeners: Array<(eventData: T) => void> = [];
  
    return {
      listeners,
      on: function (listener: (eventData: T) => void) {
        this.listeners.push(listener);
      },
      off: function (listener: (eventData: T) => void) {
        const index = this.listeners.indexOf(listener);
        if (index !== -1) {
          this.listeners.splice(index, 1);
        }
      },
      emit: function (eventData: T) {
        this.listeners.forEach((listener) => listener(eventData));
      },
    };
  }