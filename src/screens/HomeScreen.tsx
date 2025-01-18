import {ActivityIndicator, Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuSvg} from '../assets/svgs';
import {Common} from '../constants/styles';
import {Fonts} from '../constants/fonts';
import {Colors} from '../constants/colors';
import {useAppStore} from '../utils/store';
import {getUsers} from '../utils/service';
import {FlatList} from 'react-native-gesture-handler';
import {RootStackParamList, User} from '../types';
import {EmptyUsers, UserItem} from '../components';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({}: Props) => {
  const inset = useSafeAreaInsets();

  const {changeDrawerOpenStatus} = useAppStore();

  const [users, setUsers] = React.useState<User[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getInitialUsers = async () => {
    try {
      const usersRes = await getUsers();
      const usersData = await usersRes.json();
      setUsers(usersData.users);
      setIsLoading(false);
    } catch (error) {
      console.debug(error);
      Alert.alert('Something went wrong!!');
    }
  };

  React.useEffect(() => {
    getInitialUsers();
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

  const renderItem = React.useCallback(({item}: {item: User}) => {
    return <UserItem user={item} />;
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
        <Text style={styles.headerTitle}>Home</Text>
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
          keyExtractor={item => item.id.toString()}
          data={users}
          ListEmptyComponent={EmptyUsers}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default HomeScreen;
