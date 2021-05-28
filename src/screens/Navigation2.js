import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PostList from './PostList';
import PostSave from './PostSave';

const Tab = createMaterialTopTabNavigator();

export default function Mytabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="List"
        component={PostList}
        options= {{
          tabBarIcon: () =>
              <Image
                source={require('../../image/saveHeart.png')}
                //style={{width: 5, height: 5}}
              />
        }}
        />
      <Tab.Screen 
        name="Save" 
        component={PostSave}
        options={{
            tabBarIcon: () =>
              <Image
                source={require('../../image/saveHeart.png')}
                //style={{width: 5, height: 5}}
              />
        }} 
        />
    </Tab.Navigator>
  );
}
