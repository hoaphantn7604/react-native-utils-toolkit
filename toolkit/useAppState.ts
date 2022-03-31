import { DependencyList, useEffect } from 'react';
import { AppState } from 'react-native';

function useAppState(effect: (state: string) => void, deps?: DependencyList) {
  useEffect(() => {
    const susbcription = AppState.addEventListener('change', effect);
    return () => {
      // @ts-expect-error - React Native >= 0.65
      if (typeof susbcription?.remove === 'function') {
        // @ts-expect-error - need update @types/react-native@0.65.x
        susbcription.remove();
      } else {
        AppState.removeEventListener('change', effect);
      }
    };
  }, deps);
}

export default useAppState;
