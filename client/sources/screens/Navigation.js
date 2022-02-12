import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import Quiz from './Quiz';
import End from './End';

const Stack = createNativeStackNavigator();

const DefaultNav = () => {
  return (
    <Stack.Navigator defaultscren="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false}}/>
      <Stack.Screen name="End" component={End} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DefaultNav"
          component={DefaultNav}
          options={{
            headerShown: false,
            color: '#fe4500',
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={20} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;