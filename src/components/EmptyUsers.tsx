import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fonts} from '../constants/fonts';
import {Colors} from '../constants/colors';

const EmptyUsers = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      ...Fonts.bodyText,
      color: Colors.primaryGreyText,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>No users found</Text>
    </View>
  );
};

export default EmptyUsers;
