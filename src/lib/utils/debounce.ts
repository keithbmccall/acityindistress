export function debounce(func: Function, wait: number = 1000) {
  let timer: NodeJS.Timeout | undefined;
  return (...args: never[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(func, args);
    }, wait);
  };
}
