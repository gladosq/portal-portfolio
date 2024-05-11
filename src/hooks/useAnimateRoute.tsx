import {useEffect, useState} from 'react';

export const useAnimateRoute = () => {
  const [animationClass, setAnimationClass] = useState('routeEnter');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationClass('');
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    }
  }, []);

  return animationClass;
};
