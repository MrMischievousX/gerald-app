import {StyleSheet} from 'react-native';
import {scale} from '../utils/layout';

export const Fonts = StyleSheet.create({
  primaryText: {
    fontSize: scale(24),
    fontWeight: '400',
  },
  headerText: {
    fontSize: scale(32),
    fontWeight: '400',
  },
  headerBoldText: {
    fontSize: scale(32),
    fontWeight: '600',
  },
  primaryBoldText: {
    fontSize: scale(24),
    fontWeight: '600',
  },
  bodyText: {
    fontSize: scale(20),
    fontWeight: '400',
  },
  tinyText: {
    fontSize: scale(16),
    fontWeight: '400',
  },
  largeText: {
    fontSize: scale(124),
    fontWeight: '400',
  },
});
