import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignInScreen from './SignInScreen';
import ForgetPasswordScreen from './ForgetPasswordScreen';
import SignUpScreen from './SignUpScreen';
import MainScreen from './MainScreen';
import MainScreenPopular from './MainScreenPopular';
import SinglePost from './SinglePost';
import SinglePostEx from './SinglePostEx';
import CreatePost from '../components/CreatePost';
import CreateComment from '../components/CreateComment';
import Header from '../components/Header';
import UserPage from './UserPage';
import EditProfile from './EditProfile';
import LikeScreen from './LikeScreen';
import UploadPost from './UploadPost';
import Search from './Search';
import MyWeb from '../components/MyWeb';
import SearchScreen from './SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const postStack = createStackNavigator();
const MainUpperTab = createMaterialTopTabNavigator();
const MainStack = createStackNavigator();
const headerOption = {
  headerShown: false,
};
const SearchBook = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={Search} options={headerOption} />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={headerOption}
      />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={headerOption}
      />
    </Stack.Navigator>
  );
};
const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={SignInScreen} options={headerOption} />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={headerOption}
      />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={headerOption}
      />
    </Stack.Navigator>
  );
};
const MainStackScreen = () => {
  return (
    <Stack.Navigator>
      <MainStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={headerOption}
      />
      <MainStack.Screen
        name="CreatePost"
        component={CreatePost}
        options={headerOption}
      />
    </Stack.Navigator>
  );
};
const MainStackScreen2 = () => {
  return (
    <Stack.Navigator>
      <MainStack.Screen
        name="MainScreenPopular"
        component={MainScreenPopular}
        options={headerOption}
      />
      <MainStack.Screen
        name="CreatePost"
        component={CreatePost}
        options={headerOption}
      />
    </Stack.Navigator>
  );
};

const MainUpper = () => {
  return (
    <MainUpperTab.Navigator>
      <MainUpperTab.Screen name="최신" component={MainStackScreen} />
      <MainUpperTab.Screen name="인기" component={MainStackScreen2} />
    </MainUpperTab.Navigator>
  );
};
const postNavigator = () => {
  return (
    <postStack.Navigator>
      <postStack.Screen
        name="Tab"
        component={MainUpper}
        options={headerOption}
      />
      <postStack.Screen
        name="SinglePost"
        component={SinglePost}
        options={headerOption}
      />
      <postStack.Screen
        name="SinglePostEx"
        component={SinglePostEx}
        options={headerOption}
      />
      <postStack.Screen name="MyWeb" component={MyWeb} options={headerOption} />
    </postStack.Navigator>
  );
};
const MainTabScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Tab.Navigator tabBarOptions={{showLabel: false}}>
        <Tab.Screen
          name="Home"
          component={postNavigator}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={
                    focused
                      ? require('../../image/home_on.png')
                      : require('../../image/home_off.png')
                  }
                  style={{width: 30, height: 30}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchBook}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={
                    focused
                      ? require('../../image/search_on.png')
                      : require('../../image/search_off.png')
                  }
                  style={{width: 30, height: 30}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Post"
          component={UploadPost}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={
                    focused
                      ? require('../../image/upload-plus.png')
                      : require('../../image/upload+.png')
                  }
                  style={{width: 30, height: 30}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name=" "
          component={LikeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={
                    focused
                      ? require('../../image/bell_on.png')
                      : require('../../image/bell_off.png')
                  }
                  style={{width: 30, height: 30}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Edit}
          options={{
            showLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={
                    focused
                      ? require('../../image/user_on.png')
                      : require('../../image/user_off.png')
                  }
                  style={{width: 30, height: 30}}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const Edit = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserPage"
        component={UserPage}
        options={headerOption}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={({title: '에디터 편집'}, headerOption)}
      />
      <Stack.Screen
        name="LikeScreen"
        component={LikeScreen}
        options={({title: '좋아요 확인'}, headerOption)}
      />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth} options={headerOption} />
        <Stack.Screen
          options={headerOption}
          name="MainTab"
          component={MainTabScreen}
        />
        <Stack.Screen name="Edit" component={Edit} options={headerOption} />
        <Stack.Screen name="Comment" component={CreateComment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
