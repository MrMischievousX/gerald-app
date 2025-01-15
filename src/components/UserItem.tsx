import React, {memo} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Common} from '../constants/styles';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';
import {RootStackParamList, User} from '../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  user: User;
}

const ContactItem = ({user}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: Common.largeMargin,
      minHeight: Common.cardHeight,
    },
    imgContainer: {
      width: Common.largeIcon,
      height: Common.largeIcon,
      borderRadius: Common.largeIcon,
      marginRight: Common.largeMargin,
      alignItems: 'center',
      overflow: 'hidden',
      justifyContent: 'center',
      borderWidth: Common.borderWidth,
      borderColor: Colors.primaryGreyText,
    },
    contactData: {
      width: '76%',
      gap: Common.smallMargin,
    },
    image: {
      width: Common.largeIcon - Common.smallIcon,
      height: Common.largeIcon - Common.smallIcon,
      objectFit: 'contain',
    },
    nameInitial: {
      ...Fonts.primaryText,
      color: Colors.primaryGreyText,
    },
    name: {
      ...Fonts.bodyText,
      color: Colors.primaryGreyText,
    },
    phone: {
      ...Fonts.tinyText,
      color: Colors.primaryGreyText,
    },
  });

  return (
    <Pressable
      onPress={() => navigation.navigate('DetailScreen', {user: user})}
      testID="contactItem">
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          {user?.image ? (
            <Image
              testID="contactItemImage"
              source={{uri: user?.image}}
              style={styles.image}
            />
          ) : (
            <Text style={styles.nameInitial} testID="contactItemImageChar">
              {user.username[0]}
            </Text>
          )}
        </View>
        <View style={styles.contactData}>
          <Text style={styles.name}>{user.username}</Text>
          <Text style={styles.phone}>{`Phone : ${user.phone}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(ContactItem);
