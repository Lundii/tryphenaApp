import React, {useEffect, useRef} from 'react';

const useDebounce = (func, wait) => {
  let timeout;
  let debonceFunction = () => {};
  const debFunc = useRef(debonceFunction);
  const debTimeout = useRef(timeout);

  useEffect(() => {
    debFunc.current = (...args) => {
      const callLater = () => {
        debTimeout.current = null;
        func(...args);
      };

      clearTimeout(debTimeout.current);
      debTimeout.current = setTimeout(callLater, wait);
    };
  }, [func, wait]);

  return debFunc.current;
};

export default useDebounce;
