import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  useDetectDevice,
  useScale,
  useDeviceOrientation,
  useBackHandler,
} from 'react-native-utils-toolkit';
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
    console.log('On go back');
  });

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
        <Text style={styles.fontScale}>
          isSmallDevice: {isSmallDevice.toString()}
        </Text>
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
    margin: 16,
  },
  color: {
    color: 'white',
  },
});

export default App;
