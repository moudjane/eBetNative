import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home'
import Settings from './src/pages/Settings'
/*
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
*/

import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; // STATUS
const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ffffff"
        inactiveColor="#cccccc"
        barStyle={{ backgroundColor: '#ff0000' }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A90FF',
    paddingTop: '5%',
    paddingLeft: '1%',

  },
  head: {
    color: '#FFFFFF',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '50%',
  },

});