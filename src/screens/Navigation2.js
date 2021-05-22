import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PostList from './PostList';
import PostSave from './PostSave';

const Tab = createMaterialTopTabNavigator();

export default function Mytabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={PostList} />
      <Tab.Screen name="Save" component={PostSave} />
    </Tab.Navigator>
  );
}
