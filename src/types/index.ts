import {
  CompositeScreenProps,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';

export type User = {
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: 'female' | 'male';
  height: 193.24;
  id: 1;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  role: string;
  ssn: string;
  university: string;
  username: string;
  weight: 63.16;
};

export interface ScreenProps {
  navigation: NavigationProp<any>;
  route?: RouteProp<any> | any;
}

export type RootStackParamList = {
  HomeTab: undefined;
  ContactTab: undefined;
  HomeScreen: undefined;
  DetailScreen: {user: User};
};
