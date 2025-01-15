import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import {DrawerSceneWrapper} from '../components';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider style={{flex: 1}}>
        <DrawerSceneWrapper>
          <BottomTabNavigation />
        </DrawerSceneWrapper>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
