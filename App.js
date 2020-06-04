import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Perfil from './screens/Perfil';
import Expensas from './screens/Expensas';
import Departamentos from './screens/Departamentos';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Expensas') {
              iconName = 'ios-paper';
            } else if (route.name === 'Departamentos') {
              iconName = 'ios-business';
            } else if (route.name === 'Perfil') {
              iconName = 'ios-person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Expensas" component={Expensas} />
        <Tab.Screen name="Departamentos" component={Departamentos} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}