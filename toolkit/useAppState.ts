import { DependencyList, useEffect } from 'react';
import { AppState } from 'react-native';

function useAppState(effect: (state: string) => void, deps?: DependencyList) {
  useEffect(() => {
    const susbcription = AppState.addEventListener('change', effect);
    return () => {
      susbcription.remove();
    };
  }, deps);
}

export default useAppState;
