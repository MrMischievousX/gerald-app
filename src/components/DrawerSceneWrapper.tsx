import {StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useAppStore} from '../utils/store';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {window} from '../utils/layout';
import {Colors} from '../constants/colors';
import DrawerContent from './DrawerContent';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  children: React.ReactElement;
}

const DrawerSceneWrapper = ({children}: Props) => {
  const progress = useSharedValue(0);
  const inset = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const {isDrawerOpen, changeDrawerOpenStatus, changeCurrentScreen} =
    useAppStore();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    screens: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    drawer: {
      ...StyleSheet.absoluteFillObject,
      width: window.width * 2,
      backgroundColor: Colors.drawerBackground,
    },
  });

  React.useEffect(() => {
    if (isDrawerOpen) {
      progress.value = withTiming(1, {duration: 500});
    } else {
      progress.value = withTiming(0, {duration: 500});
    }
  }, [isDrawerOpen]);

  const drawerActionHandler = (screenName: string | undefined) => {
    changeDrawerOpenStatus();
    if (screenName) {
      navigation.navigate(screenName);
      changeCurrentScreen(screenName);
    }
  };

  const animatedNavigationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${interpolate(progress.value, [0, 1], [0, -8], 'clamp')}deg`,
      },
      {
        translateX: interpolate(progress.value, [0, 1], [0, 236], 'clamp'),
      },
      {
        translateY: interpolate(progress.value, [0, 1], [0, 96], 'clamp'),
      },
    ],
    paddingTop: interpolate(progress.value, [0, 1], [inset.top, 0], 'clamp'),
    borderRadius: interpolate(progress.value, [0, 1], [0, 40], 'clamp'),
    overflow: 'hidden',
  }));

  const animatedDrawerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, inset.top],
          'clamp',
        ),
      },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [0, 40], 'clamp'),
    overflow: 'hidden',
  }));

  return (
    <Animated.View style={[styles.container]}>
      <Animated.View style={[styles.drawer, animatedDrawerStyle]}>
        <DrawerContent drawerActionHandler={drawerActionHandler} />
      </Animated.View>
      <Animated.View style={[styles.screens, animatedNavigationStyle]}>
        {children}
      </Animated.View>
    </Animated.View>
  );
};

export default DrawerSceneWrapper;
