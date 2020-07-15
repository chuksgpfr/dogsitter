import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from './Dashboard';
import Walkers from './Walkers';

const Tab = createMaterialBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Walkers"
        component={Walkers}
        options={{
          tabBarLabel: 'Walkers',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="walk" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Dashboard}
        options={{
          tabBarLabel: 'Bookmark',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark-multiple-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;