import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginScreen from './screens/LogInScreen';
import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {

  const [screenFlag, setScreenFlag] = useState('');

  const logInHandler = (loginState) => {
      setScreenFlag(loginState);
  };

  const HomeScreenHandler = (homeScreenState) => {
    setScreenFlag(homeScreenState);
};

  let content = <StartScreen onLogIn = {logInHandler} />;

  if (screenFlag === 'LoginScreen'){
    content = <LoginScreen homeScreen = {HomeScreenHandler}/>;
    }
  
  if (screenFlag === 'HomeScreen'){
    content = <HomeScreen />;
  }

  return(
    <View style={styles.screen}>
      {content}
      </View>
  ) 
};

const styles=StyleSheet.create({
  screen: {
    flex: 1
  }
});
