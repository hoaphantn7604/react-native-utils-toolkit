import { DependencyList, EffectCallback, useEffect } from 'react';
import { AppState } from 'react-native';

function useAppState(effect: EffectCallback, deps?: DependencyList) {
    useEffect(() => {
        AppState.addEventListener('change', effect);
        return () => AppState.removeEventListener('change', effect);
    }, deps);
}

export default useAppState;