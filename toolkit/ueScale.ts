import { NativeModules } from 'react-native';
import { UseScale } from './type';

const { UtilsToolkit } = NativeModules;
const { checkTablet, checkSmallDevice,

    deviceInch
} = UtilsToolkit.getConstants();


const useScale: UseScale = {
    fontScale: (number: number = 1) => {
        const value = (deviceInch + (checkSmallDevice || checkTablet ? 2 : 3)) / 10;
        const scale = number * Number(value.toFixed(1));
        return scale;
    },
    scale: (number: number = 1) => {
        const value = (deviceInch + (checkSmallDevice || checkTablet ? 3 : 4)) / 10;
        const scale = number * Number(value.toFixed(1));
        return scale;
    },
};


export default useScale;
