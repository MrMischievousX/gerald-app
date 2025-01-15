import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Common} from '../constants/styles';
import {ChevronSvg} from '../assets/svgs';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';
import {ScrollView} from 'react-native-gesture-handler';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../types';

type Props = StackScreenProps<RootStackParamList, 'DetailScreen'>;

const userMap = [
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'firstName',
    label: 'FirstName',
  },
  {
    key: 'lastName',
    label: 'lastName',
  },
  {
    key: 'username',
    label: 'Username',
  },
  {
    key: 'gender',
    label: 'Gender',
  },
  {
    key: 'phone',
    label: 'Phone',
  },
  {
    key: 'role',
    label: 'Role',
  },
  {
    key: 'university',
    label: 'University',
  },
];

const DetailScreen = (props: Props) => {
  const navigation = useNavigation();
  const user = props.route.params?.user;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Common.largeMargin * 2,
      paddingHorizontal: Common.largeMargin,
      backgroundColor: Colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Common.mediumMargin * 2,
      marginBottom: Common.largeMargin * 2,
    },
    userContainer: {
      flex: 1,
    },
    imgContainer: {
      width: Common.cardHeight * 3,
      height: Common.cardHeight * 3,
      borderRadius: Common.cardHeight * 3,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: Common.borderWidth,
      borderColor: Colors.primaryGreyText,
      alignSelf: 'center',
    },
    image: {
      width: Common.cardHeight * 2,
      height: Common.cardHeight * 2,
      objectFit: 'contain',
    },
    nameInitial: {
      ...Fonts.largeText,
      color: Colors.primaryGreyText,
    },
    userData: {
      marginTop: Common.largeMargin * 2,
      gap: Common.mediumMargin,
    },
    label: {
      ...Fonts.tinyText,
      color: Colors.primaryGreyText,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ChevronSvg
          onPress={navigation.goBack}
          color={Colors.primaryGreyText}
          width={Common.mediumIcon}
          height={Common.mediumIcon}
        />
      </View>
      <ScrollView style={styles.userContainer}>
        <View style={styles.imgContainer}>
          {user?.image ? (
            <Image
              testID="contactItemImage"
              source={{uri: user?.image}}
              style={styles.image}
            />
          ) : (
            <Text style={styles.nameInitial} testID="contactItemImageChar">
              {user.username[0].toUpperCase()}
            </Text>
          )}
        </View>
        <View style={styles.userData}>
          {userMap.map(userfield => {
            return (
              <Text key={userfield.key} style={styles.label}>
                {userfield.label} : {user[userfield.key as keyof typeof user]}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
