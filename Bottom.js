import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Reminders from './screens/Reminder';
import Create from './screens/Create';

const Tab = createMaterialBottomTabNavigator();

export default class Bottom extends React.Component {
  render() {
    return (
      
        <Tab.Navigator
          barStyle={{ backgroundColor: 'white' }} // Background color of the bottom tab bar
          activeColor="#eb4034" 
          inactiveColor="gray" // Color of inactive tabs
          shifting={true} // Set to true for shifting behavior (like Material Design)
        >
          <Tab.Screen
            name="Reminders"
            component={Reminders}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="alarm" size={25} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Create"
            component={Create}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="create" size={25} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
     
    );
  }
}
