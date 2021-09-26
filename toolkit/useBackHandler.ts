import { useEffect, useState, useCallback } from 'react';
import { BackHandler } from 'react-native';

function useBackHandler(callback?: () => void) {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            if (callback) {
                callback();
            }
            return true;
        });

        return BackHandler.removeEventListener('hardwareBackPress', () => {
            if (callback) {
                callback();
            }
            return true;
        })

    }, []);
}

export default useBackHandler;