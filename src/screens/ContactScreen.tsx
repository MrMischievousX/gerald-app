import {
  ActivityIndicator,
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {MenuSvg} from '../assets/svgs';
import {Common} from '../constants/styles';
import {Fonts} from '../constants/fonts';
import {Colors} from '../constants/colors';
import {useAppStore} from '../utils/store';
import {
  requestAndroidContactsPermission,
  requestIOSContactsPermission,
} from '../utils/service';
import {FlatList} from 'react-native-gesture-handler';
import Contacts from 'react-native-contacts';
import {Contact} from 'react-native-contacts/type';
import {EmptyUsers, ContactItem} from '../components';
import {RootStackParamList} from '../types';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'ContactTab'>;

const ContactScreen = ({}: Props) => {
  const {changeDrawerOpenStatus} = useAppStore();

  const [users, setUsers] = React.useState<Contact[]>([]);
  const [isLoading, setIsloading] = React.useState<boolean>(true);

  const loadContacts = React.useCallback(async () => {
    try {
      const status =
        Platform.OS === 'android'
          ? await requestAndroidContactsPermission()
          : await requestIOSContactsPermission();

      if (status === 'GRANTED') {
        const localContacts = await Contacts.getAll();
        setUsers(localContacts);
        setIsloading(false);
      } else {
        setIsloading(true);
      }
    } catch (e) {
      console.debug(e);
      Alert.alert('Something went wrong!!');
    }
  }, []);

  React.useEffect(() => {
    loadContacts();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Common.largeMargin * 2,
      paddingHorizontal: Common.largeMargin,
      backgroundColor: Colors.background,
    },
    loader: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Common.mediumMargin * 2,
      marginBottom: Common.largeMargin * 2,
    },
    headerTitle: {...Fonts.primaryText, color: Colors.primaryGreyText},
  });

  const renderItem = React.useCallback(({item}: {item: Contact}) => {
    return <ContactItem contact={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MenuSvg
          onPress={changeDrawerOpenStatus}
          color={Colors.primaryGreyText}
          width={Common.mediumIcon}
          height={Common.mediumIcon}
        />
        <Text style={styles.headerTitle}>Contacts</Text>
      </View>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator
            size={'large'}
            style={styles.loader}
            color={Colors.primaryCta}
          />
        </View>
      ) : (
        <FlatList
          keyExtractor={item => item.recordID}
          data={users}
          ListEmptyComponent={EmptyUsers}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default ContactScreen;
