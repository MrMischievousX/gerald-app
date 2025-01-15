import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigation from './HomeStackNavigation';
import {ContactScreen} from '../screens';
import {ContactsTab, HomeTab} from '../assets/components';
import {Common} from '../constants/styles';
import {RootStackParamList} from '../types';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {marginBottom: Common.smallMargin},
      }}>
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarIcon: ({color, size}) => {
            return <HomeTab width={size} height={size} color={color} />;
          },
          tabBarLabel: 'Home',
        }}
        component={HomeStackNavigation}
      />
      <Tab.Screen
        name="ContactTab"
        options={{
          tabBarIcon: ({color, size}) => {
            return <ContactsTab width={size} height={size} color={color} />;
          },
          tabBarLabel: 'Contacts',
        }}
        component={ContactScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
