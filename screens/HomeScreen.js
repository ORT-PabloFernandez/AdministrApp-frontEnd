import React, { useState } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Perfil from '../screens/Perfil';
import Expensas from '../screens/Expensas';
import Departamentos from '../screens/Departamentos';
import Avisos from '../screens/Avisos';
import Background from '../components/Background';

const Tab = createBottomTabNavigator();

const HomeScreen = props => { 

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Expensas') {
              iconName = 'ios-paper';
            } else if (route.name === 'Avisos') {
                iconName = 'ios-business';
            } else if (route.name === 'Departamentos') {
              iconName = 'ios-business';
            } else if (route.name === 'Perfil') {
              iconName = 'ios-person';
            } else if (route.name === 'Avisos') {
              iconName = 'ios-paper';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Expensas" children={()=><Expensas />} />
        <Tab.Screen name="Avisos" children={()=><Avisos />} />
        <Tab.Screen name="Departamentos" children={()=><Departamentos />} />
        <Tab.Screen name="Perfil" children={()=><Perfil />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;