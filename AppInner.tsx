import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Search from './src/pages/Search';
import Notification from './src/pages/Notification';
import MyPage from './src/pages/MyPage';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';

export type LoggedInParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  MyPage: undefined;
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppInner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name={'Home'} component={Home} options={{title: '홈'}} />
          <Tab.Screen
            name={'Search'}
            component={Search}
            options={{title: '검색'}}
          />
          <Tab.Screen
            name={'Notification'}
            component={Notification}
            options={{title: '알림'}}
          />
          <Tab.Screen
            name={'MyPage'}
            component={MyPage}
            options={{title: '내 프로필'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name={'SignIn'}
            component={SignIn}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name={'Signup'}
            component={SignUp}
            options={{title: '회원가입'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;
