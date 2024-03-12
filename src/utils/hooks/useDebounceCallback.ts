import { useRef, useEffect } from 'react';

function useDebounceCallback<T extends (...args: unknown[]) => void>(callback: T, delay: number) {
  const fnTimeoutHandler = useRef<ReturnType<typeof setTimeout>>();

  useEffect(
    () => () => {
      clearTimeout(fnTimeoutHandler.current);
    },
    [],
  );

  const debouncedFn = (...args) => {
    clearTimeout(fnTimeoutHandler.current);
    fnTimeoutHandler.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFn;
}

export default useDebounceCallback;
