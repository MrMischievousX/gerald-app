import {Dimensions, PixelRatio, Platform} from 'react-native';
const window = Dimensions.get('screen');
const {width, height} = window;

export const isSmallDevice = width <= 375 && height <= 667 ? true : false;

export const guidelineBaseWidth = 380;
export const guidelineBaseWidthAndroid = width <= 375 ? 400 : 380;

const scale = (size: number) => {
  let dim;
  if (Platform.OS === 'android') {
    dim = (width / guidelineBaseWidthAndroid) * size;
  } else {
    dim = (width / guidelineBaseWidth) * size;
  }

  dim = Math.round(PixelRatio.roundToNearestPixel(dim));

  if (isSmallDevice) return dim * 0.92;
  return dim;
};

export {scale, window};
