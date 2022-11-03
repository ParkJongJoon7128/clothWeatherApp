import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

import WeatherScreen from './screens/WeatherScreen';
import CodyScreen from './screens/CodyScreen';
import LocationScreen from './screens/LocationScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Location">
        <Tab.Screen
          name="Location"
          component={LocationScreen}
          options={{
            title: '위치',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Weather"
          component={WeatherScreen}
          options={{
            title: '날씨',
            tabBarIcon: ({color, size}) => (
              <Icon name="cloud-queue" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cody"
          component={CodyScreen}
          options={{
            title: '코디',
            tabBarIcon: ({color, size}) => (
              <Icon name="checkroom" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
