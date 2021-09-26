import { Dimensions, NativeModules, Platform } from 'react-native';
import { devicesWithNotch } from './devicesWithNotch';
import { UseDetectDevice } from './type';

const { UtilsToolkit } = NativeModules;
const { checkTablet, checkSmallDevice,
    checkhasNotch, getModel, getBrand,
    deviceInch
} = UtilsToolkit.getConstants();

const hasNotch = () => {
    if (Platform.OS === 'ios') {
        if (checkTablet) {
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

const useDetectDevice: UseDetectDevice = {
    isTablet: checkTablet,
    isSmallDevice: checkSmallDevice,
    isAndroid: Platform.OS === 'android',
    isIOS: Platform.OS === 'ios',
    hasNotch: hasNotch(),
    deviceInch: Number(deviceInch.toFixed(1)),
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default useDetectDevice;
