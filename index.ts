import useScale from './toolkit/ueScale';
import useDetectDevice from './toolkit/useDetectDevice';
import useDeviceOrientation from './toolkit/useDeviceOrientation';
import useBackHandler from './toolkit/useBackHandler';
import useAppState from './toolkit/useAppState';

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
    scale,
    useBackHandler,
    useAppState
};
