import { useDetectDevice, useScale } from './toolkit';
import { useDeviceOrientation } from './toolkit/useDeviceOrientation';

const { 
    deviceInch, 
    hasNotch, 
    height, 
    isAndroid, 
    isIOS, 
    isSmallDevice, 
    isTablet, 
    width 
} = useDetectDevice;

const { fontScale, scale } = useScale;

export { 
    useDetectDevice, 
    useScale, 
    useDeviceOrientation, 
    deviceInch, 
    hasNotch, 
    height, 
    isAndroid, 
    isIOS, 
    isSmallDevice, 
    isTablet, 
    width, 
    fontScale, 
    scale
};
