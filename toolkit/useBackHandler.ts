import { DependencyList, EffectCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';

function useBackHandler(effect: EffectCallback, deps?: DependencyList) {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', effect)
        return () => BackHandler.removeEventListener('hardwareBackPress', effect)

    }, deps);
}

export default useBackHandler;