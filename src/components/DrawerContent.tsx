import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Common} from '../constants/styles';
import {Fonts} from '../constants/fonts';
import {Colors} from '../constants/colors';
import {window} from '../utils/layout';
import {useAppStore} from '../utils/store';

const screens = [
  {
    label: 'Home',
    name: 'HomeTab',
    key: 'home_nav',
  },
  {
    label: 'Contacts',
    name: 'ContactTab',
    key: 'contact_nav',
  },
  {
    label: 'Favourites',
    key: 'favourite_nav',
  },
  {
    label: 'Your Orders',
    key: 'orders_nav',
  },
];

interface Props {
  drawerActionHandler: (screenName?: string | undefined) => void;
}

const DrawerContent = ({drawerActionHandler}: Props) => {
  const {currentScreen} = useAppStore();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: Common.largeMargin * 2,
      width: window.width * 0.4,
      marginTop: Common.largeMargin * 4,
    },
    header: {
      ...Fonts.headerBoldText,
      color: Colors.primaryText,
      textAlign: 'center',
      marginTop: Common.largeMargin * 2,
    },
    drawerContainer: {
      marginTop: Common.largeMargin * 3,
      gap: Common.largeMargin,
    },
    actionCta: {padding: Common.largeMargin},
    label: {...Fonts.primaryText, color: Colors.primaryText},
    signout: {
      marginTop: Common.largeMargin * 2,
      paddingTop: Common.largeMargin * 2,
      borderTopWidth: Common.borderWidth,
      borderColor: Colors.primaryGrey,
    },
    activeScreen: {
      backgroundColor: Colors.active,
      borderRadius: Common.primaryBorder,
    },
    activeScreenText: {
      color: Colors.activeTitle,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Beka</Text>
      <View style={styles.drawerContainer}>
        {screens.map(screen => {
          const isCurrentActive = currentScreen === screen.name;

          return (
            <Pressable
              style={[
                styles.actionCta,
                isCurrentActive ? styles.activeScreen : {},
              ]}
              key={screen.key}
              onPress={() => {
                drawerActionHandler(screen.name);
              }}>
              <Text
                style={[
                  styles.label,
                  isCurrentActive ? styles.activeScreenText : {},
                ]}>
                {screen.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.signout}>
        <Pressable
          onPress={() => drawerActionHandler()}
          style={{padding: Common.largeMargin}}>
          <Text style={styles.label}>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DrawerContent;
