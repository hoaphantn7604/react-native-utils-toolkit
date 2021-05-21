# react-native-utils-toolkit

## Getting started

`$ yarn add react-native-utils-toolkit`

### Start IOS

`$ cd ios && pod install`

## Usage
```js
    import {useDetectDevice, useScale} from 'react-native-utils-toolkit';
    const {scale, fontScale} = useScale;
    const {
        deviceInch,
        hasNotch,
        height,
        width,
        isAndroid,
        isIOS,
        isSmallDevice,
        isTablet,
    } = useDetectDevice;
```