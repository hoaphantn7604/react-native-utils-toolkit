import { NativeModules, PixelRatio } from 'react-native';
import { IUseScale } from './model';

const { UtilsToolkit } = NativeModules;
const {
  deviceInch
} = UtilsToolkit.getConstants();


const pixelDensity = PixelRatio.get();

const useScale: IUseScale = {
  fontScale: (number: number = 1) => {
    const value = (deviceInch + pixelDensity) / 10;
    const scale = number * Number(value.toFixed(1));
    return scale;
  },
  scale: (number: number = 1) => {
    const value = (deviceInch + (pixelDensity + 0.5)) / 10;
    const scale = number * Number(value.toFixed(1));
    return scale;
  },
};


export default useScale;
