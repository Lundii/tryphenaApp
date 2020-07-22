/* eslint-disable no-undef */
import {useState, useCallback} from 'react';
import useAuth from './useAuth';

// eslint-disable-next-line no-unused-vars
const useFetcher = type => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const {token} = useAuth();

  const status = response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    throw response;
  };

  const json = responseData => setData(responseData);
  const request = useCallback(
    async (url, requestData) => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method: type || 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestData),
        });
        setIsLoading(false);
        const data = await status(response);
        json(data);
        return data;
      } catch (responseError) {
        setIsLoading(false);
        if (responseError.json) {
          responseError.json().then(errorMessage => {
            setError(errorMessage.error);
          });
        } else {
          setError(responseError);
        }
      }
      // fetch(url, {
      //   method: type || 'GET',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${token}`,
      //   },
      //   body: JSON.stringify(requestData),
      // })
      //   .then(status)
      //   .then(json)
      //   .catch(responseError => {
      //     setIsLoading(false);
      //     if (responseError.json) {
      //       responseError.json().then(errorMessage => {
      //         setError(errorMessage.error);
      //       });
      //     } else {
      //       setError(responseError);
      //     }
      //   });
    },
    [token, type],
  );

  return {
    data,
    request,
    isLoading,
    error,
  };
};

export default useFetcher;
