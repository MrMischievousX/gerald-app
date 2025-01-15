import React, {memo} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Contact} from 'react-native-contacts/type';
import {Common} from '../constants/styles';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';

interface Props {
  contact: Contact;
}

const ContactItem = ({contact}: Props) => {
  if (contact?.phoneNumbers.length <= 0) return null;

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
      width: Common.largeIcon,
      height: Common.largeIcon,
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
    <View testID="contactItem">
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          {contact?.hasThumbnail ? (
            <Image
              testID="contactItemImage"
              source={{uri: contact?.thumbnailPath}}
              style={styles.image}
            />
          ) : (
            <Text style={styles.nameInitial} testID="contactItemImageChar">
              {contact.displayName
                ? contact.displayName[0]
                : contact.givenName[0]}
            </Text>
          )}
        </View>
        <View style={styles.contactData}>
          <Text style={styles.name}>
            {contact?.displayName
              ? contact?.displayName
              : `${contact?.givenName} ${contact?.familyName}`}
          </Text>
          <View testID="contactItemNumber">
            {contact?.phoneNumbers?.slice(0, 1).map((item, index) => {
              return (
                <Text style={styles.phone} key={index}>
                  {`${item.label.toCapitalize()} : ${item.number}`}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(ContactItem);
