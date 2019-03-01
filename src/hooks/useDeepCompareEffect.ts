import { useRef, useEffect } from 'react';
import deepEqual from 'deep-equal';

const usePrevious = (value: any) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useDeepCompareEffect = (callback: () => void, inputs: any) => {
  useEffect(() => {
    if (deepEqual(prevInputs, inputs)) {
      return;
    }
    callback();
  });
  const prevInputs = usePrevious(inputs);
};
