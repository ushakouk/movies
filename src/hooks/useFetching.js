import { useState } from 'react';

export function useFetching() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetch = (callback, ...arg) => {
    try {
      setIsLoading(true)
      return callback(...arg).then((resp) => {
        setIsLoading(false)
        return resp;
      })
    } catch (e) {
      setError(e.message);
      setIsLoading(false)
    }
  }

  return [fetch, isLoading, error]
}
