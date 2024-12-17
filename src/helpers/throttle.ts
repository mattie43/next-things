type ThrottledFunction<T extends (...args: any[]) => void> = (
  ...args: Parameters<T>
) => void;

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ThrottledFunction<T> {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this; // Correctly type 'this'
    const now = Date.now();

    if (!lastRan) {
      func.apply(context, args);
      lastRan = now;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (now - lastRan >= limit) {
          func.apply(context, args);
          lastRan = now;
        }
      }, limit - (now - lastRan));
    }
  };
}
