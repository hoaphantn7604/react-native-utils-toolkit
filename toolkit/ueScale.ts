import { NativeModules, PixelRatio } from 'react-native';
import { UseScale } from './type';

const { UtilsToolkit } = NativeModules;
const {
  deviceInch
} = UtilsToolkit.getConstants();


const getFontScale = PixelRatio.getFontScale();

const useScale: UseScale = {
  fontScale: (number: number = 1) => {
    const value = (deviceInch + (getFontScale + 1.5)) / 10;
    const scale = number * Number(value.toFixed(1));
    return scale;
  },
  scale: (number: number = 1) => {
    const value = (deviceInch + (getFontScale + 2)) / 10;
    const scale = number * Number(value.toFixed(1));
    return scale;
  },
};


export default useScale;
