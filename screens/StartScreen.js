import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const StartScreen = ( props ) => (
  <Background>
    <Logo />
    <Button mode="contained" onPress={() => props.onLogIn('LoginScreen')}>
      Ya tengo cuenta
    </Button>
    <Button
      mode="outlined"
      onPress={() => props.onRegister('RegisterScreen')}
    >
      Crear cuenta
    </Button>
  </Background>
);

export default StartScreen;