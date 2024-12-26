import { useEffect } from 'react';

const useKey = (key: string, callback: () => void): void => {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent): void => {
      if (event.key === key) {
        callback();
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [key, callback]);
};

export default useKey;
