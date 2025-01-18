import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

const baseUrl = 'https://dummyjson.com';

const getUsers = async () => {
  return fetch(`${baseUrl}/users`);
};

const getUser = async (userId: number) => {
  return fetch(`${baseUrl}/users/${userId}`);
};

const requestIOSContactsPermission = async () => {
  const status = await Contacts.checkPermission();
  if (status === 'authorized') {
    return 'GRANTED';
  } else {
    const request = await Contacts.requestPermission();
    return request === 'authorized' && 'GRANTED';
  }
};

const requestAndroidContactsPermission = async () => {
  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    {
      title: 'Allow Gerald to Access Contacts',
      message:
        'We need access to your contacts to enhance your experience. Your privacy is our priority!',
      buttonPositive: 'OK',
    },
  );
  return status === PermissionsAndroid.RESULTS.GRANTED && 'GRANTED';
};

export {
  requestIOSContactsPermission,
  requestAndroidContactsPermission,
  getUsers,
  getUser,
};
