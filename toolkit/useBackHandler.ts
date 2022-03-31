import { DependencyList, EffectCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';

function useBackHandler(effect: EffectCallback, deps?: DependencyList) {
  useEffect(() => {
    const susbcription = BackHandler.addEventListener('hardwareBackPress', () => {
      effect();
      return true;
    })
    return () => {
      // @ts-expect-error - React Native >= 0.65
      if (typeof susbcription?.remove === 'function') {
        // @ts-expect-error - need update @types/react-native@0.65.x
        susbcription.remove();
      } else {
        BackHandler.removeEventListener('hardwareBackPress', ()=>{
          effect();
          return true;
        });
      }
    };
  }, deps);
}

export default useBackHandler;