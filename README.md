# react-native-utils-toolkit
Provide solutions to make your app flexible for different screen sizes, different devices.
When developing with react-native, you need to manually adjust your app to look great on a variety of different screen sizes.
This package provides some simple tooling to make your scaling a whole lot easier.

## Getting started
```js
    yarn add react-native-utils-toolkit
```
or
```js
    npm i react-native-utils-toolkit
```

### RN Version < 0.60
```js
    react-native link react-native-utils-toolkit
```

### Run IOS
```js
    cd ios && pod install
    react-native run-ios
```

### Run Android
```js
    react-native run-android
```

### Jest setup
```js
    jest.mock('react-native-utils-toolkit', () => {
        const UtilsToolkit = require('react-native-utils-toolkit/mock');
        return UtilsToolkit;
    });
```
### Documents
| API                | Type                 | Description                                                             | 
| ------------------ | -------------------- | ----------------------------------------------------------------------- |
| scale              | Function             | Will return a linear scaled result of the provided size                 |
| fontScale          | Function             | Will return a linear scaled result of the font size provided            |
| deviceInch         | Number               | Inch of device                                                          |
| hasNotch           | Boolean              | Tells if the device has a notch                                         |
| isAndroid          | Boolean              | Tells if the device is Android operating system                         |
| isIOS              | Boolean              | Tells if the device is IOS operating system                             |
| isSmallDevice      | Boolean              | Tells the device has a screen size smaller than 4.8 inches              |
| isTablet           | Boolean              | Tells if the device is a tablet                                         |
| width              | Number               | Screen width                                                            |
| height             | Number               | Screen height                                                           |
|useDeviceOrientation| Hooks API            | Device orientation detection                                            |
| useBackHandler     | Hooks API            | Detects hardware button presses for back navigation                     |
| useAppState        | Hooks API            | Can tell you if the app is in the foreground or background, and notify you when the state changes |

#### Source code demo
[react-native-template-components](https://github.com/hoaphantn7604/react-native-template-components) A beautiful template for React Native.

### Demo

![](https://github.com/hoaphantn7604/file-upload/blob/master/document/scale/demo.png)

## Usage
```js
    import React from 'react';
    import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
    import {useBackHandler, useAppState, useDetectDevice, useScale, useDeviceOrientation} from 'react-native-utils-toolkit';
    
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

    const App = () => {
        const deviceOrientation = useDeviceOrientation();
        console.log('deviceOrientation', deviceOrientation); // PORTRAIT or LANDSCAPE

        useBackHandler(() => {
            console.log('On goback');
        }, []);

        useAppState(state => {
            console.log('App State', state);
        }, []);
        
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.fontScale}>Device width: {width}</Text>
                    <Text style={styles.fontScale}>Device height: {height}</Text>
                    <Text style={styles.fontScale}>Device inch: {deviceInch}</Text>
                    <Text style={styles.fontScale}>isAndroid: {isAndroid.toString()}</Text>
                    <Text style={styles.fontScale}>isIOS: {isIOS.toString()}</Text>
                    <Text style={styles.fontScale}>hasNotch: {hasNotch.toString()}</Text>
                    <Text style={styles.fontScale}>isTablet: {isTablet.toString()}</Text>
                    <Text style={styles.fontScale}>isSmallDevice: {isSmallDevice.toString()}</Text>
                    <View style={styles.box}>
                        <Text style={[styles.color, {fontSize: fontScale(14)}]}>150x150</Text>
                        <Text style={[styles.color, {fontSize: fontScale(14)}]}>
                            Scale: {scale(150)}x{scale(150)}
                        </Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        fontScale: {
            fontSize: fontScale(16),
        },
        box: {
            width: scale(150),
            height: scale(150),
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            margin: scale(16),
        },
        color: {
            color: 'white',
        },
    });

    export default App;

```