function useDebounce(value: any, delay: number) {
  let timerId: any;
  timerId = setTimeout(() => {
    return value;
  }, delay);
  clearTimeout(timerId);
}

export default useDebounce;
