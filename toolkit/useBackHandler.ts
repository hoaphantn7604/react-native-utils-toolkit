import { DependencyList, EffectCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';

function useBackHandler(effect: EffectCallback, deps?: DependencyList) {
  useEffect(() => {
    const susbcription = BackHandler.addEventListener('hardwareBackPress', () => {
      effect();
      return true;
    })
    return () => {
      if (typeof susbcription?.remove === 'function') {
        susbcription.remove();
      } else {
        BackHandler.removeEventListener('hardwareBackPress', () => {
          effect();
          return true;
        });
      }
    };
  }, deps);
}

export default useBackHandler;