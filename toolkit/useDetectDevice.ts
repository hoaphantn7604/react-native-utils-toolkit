import { Dimensions, NativeModules, Platform, PixelRatio } from 'react-native';
import { devicesWithNotch } from './devicesWithNotch';
import { IUseDetectDevice } from './model';

const { width, height } = Dimensions.get('window');
const { UtilsToolkit } = NativeModules;
const { checkSmallDevice,
  checkhasNotch, getModel, getBrand,
  deviceInch
} = UtilsToolkit.getConstants();

const isTablet = () => {
  let pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else {
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
  }
};

const hasNotch = () => {
  if (Platform.OS === 'ios') {
    if (isTablet()) {
      return false;
    } else {
      return checkhasNotch;
    }
  } else {
    const model = getModel;
    const brand = getBrand;

    const notch = devicesWithNotch.findIndex(item => item.brand.toLowerCase() === brand.toLowerCase() && item.model.toLowerCase() === model.toLowerCase()) !== -1;
    return notch;
  }
}

const useDetectDevice: IUseDetectDevice = {
  isTablet: isTablet(),
  isSmallDevice: checkSmallDevice,
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
  hasNotch: hasNotch(),
  deviceInch: Number(deviceInch.toFixed(1)),
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export default useDetectDevice;
