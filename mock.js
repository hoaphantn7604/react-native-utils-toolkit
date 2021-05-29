
function NOOP() {}
module.exports = {
  useScale: {
    scale: NOOP,
    fontScale: NOOP,
  },
  useDetectDevice: {
    isTablet: NOOP,
    isSmallDevice: NOOP,
    isAndroid: NOOP,
    isIOS: NOOP,
    hasNotch: NOOP,
    deviceInch: NOOP,
    width: NOOP,
    height: NOOP,
  },
  useDeviceOrientation: NOOP
}
