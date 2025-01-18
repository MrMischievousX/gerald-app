import {Appearance, Platform, StatusBar, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Colors} from './src/constants/colors';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
  });

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor(Colors.background);
      StatusBar.setBarStyle('dark-content');
    }
    Appearance.setColorScheme('light');
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <MainNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
