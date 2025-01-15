import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Colors} from './src/constants/colors';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor(Colors.background);
      StatusBar.setBarStyle('dark-content');
    }
  }, []);

  return <MainNavigation />;
};

export default App;
