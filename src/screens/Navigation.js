import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignInScreen from './SignInScreen';
import ForgetPasswordScreen from './ForgetPasswordScreen';
// import SignUpScreen from './SignUpScreen';
import MainScreen from './MainScreen';
import SinglePost from './SinglePost';
import CreatePost from '../components/CreatePost';
import CreateComment from '../components/CreateComment';
import Header from '../components/Header';
import UserPage from './UserPage';
import EditProfile from './EditProfile';
import LikeScreen from './LikeScreen';
import UploadPost from './UploadPost';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const postStack = createStackNavigator();
const MainUpperTab = createMaterialTopTabNavigator();
const MainStack = createStackNavigator();
const headerOption = {
  headerShown: false,
};

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}
function SearchScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search!</Text>
    </View>
  );
}
function PostScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Post!</Text>
    </View>
  );
}
function NotificationScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notification!</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={SignInScreen} options={headerOption} />
      {/* <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{title: '회원 가입'}}
      /> */}
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={{title: '비밀번호 찾기'}}
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

const MainUpper = () => {
  return (
    <MainUpperTab.Navigator>
      <MainUpperTab.Screen name="최신" component={MainStackScreen} />
      <MainUpperTab.Screen name="인기" component={MainStackScreen} />
      <MainUpperTab.Screen name="스토어" component={MainStackScreen} />
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
    </postStack.Navigator>
  );
};
const MainTabScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={postNavigator} />
        {/* Home화면은 Tab Navigator 하나 더 필요 */}
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Post" component={UploadPost} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={Edit} />
        {/* Profile 화면은 Tab Navigator 하나 더 필요 */}
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
