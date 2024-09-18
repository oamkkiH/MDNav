import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import AppBar from './components/AppBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          header: () => {
            const canGoBack = navigation.canGoBack();
            return (
              <AppBar
                title={route.name === 'HomeScreen' ? 'MD Nav Demo' : 'Second Screen'}
                canGoBack={canGoBack}
              />
            );
          }
        })}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
