import { Platform } from 'react-native';

// sora font family
export const fontFamily = {
  bold: 'Sora-Bold',
  extraBold: 'Sora-ExtraBold',
  extraLight: 'Sora-ExtraLight',
  light: 'Sora-Light',
  medium: 'Sora-Medium',
  regular: 'Sora-Regular',
  semiBold: 'Sora-SemiBold',
  thin: 'Sora-Thin',
};

export const fontFamilyWithFallback = {
  bold: 'Sora-Bold, system-ui, sans-serif',
  extraBold: 'Sora-ExtraBold, system-ui, sans-serif',
  extraLight: 'Sora-ExtraLight, system-ui, sans-serif',
  light: 'Sora-Light, system-ui, sans-serif',
  medium: 'Sora-Medium, system-ui, sans-serif',
  regular: 'Sora-Regular, system-ui, sans-serif',
  semiBold: 'Sora-SemiBold, system-ui, sans-serif',
  thin: 'Sora-Thin, system-ui, sans-serif',
};

export const getPlatformFont = (fontKey: keyof typeof fontFamily) => {
  const font = fontFamily[fontKey];

  if (Platform.OS === 'android') {
    return font;
  }

  return font;
};

export const fontConfig = {
  [fontFamily.bold]: require('../assets/fonts/Sora-Bold.ttf'),
  [fontFamily.extraBold]: require('../assets/fonts/Sora-ExtraBold.ttf'),
  [fontFamily.extraLight]: require('../assets/fonts/Sora-ExtraLight.ttf'),
  [fontFamily.light]: require('../assets/fonts/Sora-Light.ttf'),
  [fontFamily.medium]: require('../assets/fonts/Sora-Medium.ttf'),
  [fontFamily.regular]: require('../assets/fonts/Sora-Regular.ttf'),
  [fontFamily.semiBold]: require('../assets/fonts/Sora-SemiBold.ttf'),
  [fontFamily.thin]: require('../assets/fonts/Sora-Thin.ttf'),
};
