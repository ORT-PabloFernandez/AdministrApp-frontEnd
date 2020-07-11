import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginScreen from './screens/LogInScreen';
import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function Index() {

  const [screenFlag, setScreenFlag] = useState('');

  const logInHandler = (loginState) => {
    setScreenFlag(loginState);
  };

  const HomeScreenHandler = (homeScreenState) => {
    setScreenFlag(homeScreenState);
  };

  const RegisterScreenHandler = (registerScreenState) => {
    setScreenFlag(registerScreenState);
};

  let content = <StartScreen onLogIn={logInHandler} onRegister = {RegisterScreenHandler}/>;

  if (screenFlag === 'LoginScreen') {
    content = <LoginScreen homeScreen={HomeScreenHandler} />;
  }

  if (screenFlag === 'HomeScreen') {
    content = <HomeScreen />;
  }

  if (screenFlag === 'RegisterScreen'){
    content = <RegisterScreen homeScreen = {HomeScreenHandler}/>;
    }

  return (
    <View style={styles.screen}>
      {content}
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
