import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <MainNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
