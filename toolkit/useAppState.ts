import { DependencyList, useEffect } from 'react';
import { AppState } from 'react-native';

function useAppState(effect: (state: string) => void, deps?: DependencyList) {
  useEffect(() => {
    const susbcription = AppState.addEventListener('change', effect);
    return () => {
      if (susbcription?.remove) {
        susbcription.remove();
      } else {
        AppState.removeEventListener('change', effect);
      }
    };
  }, deps);
}

export default useAppState;
