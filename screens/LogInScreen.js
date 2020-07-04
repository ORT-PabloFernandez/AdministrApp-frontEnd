import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';

import Api from '../constants/api';
import Session from '../constants/session';

const axios = require('axios');

const LoginScreen = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasLoginError, setHasLoginError] = useState(false);

  const _onLoginPressed = () => {

    console.log("_onLoginPressed...");
    var callLogin = {
      method: 'post',
      url: `${Api.url}/login`,
      data: {
        'email': email,
        'password': password
      }
    };
    console.log("callLogin for " + JSON.stringify(email));

    axios(callLogin)
      .then(function(response){
        console.log("callLogin... \n" + JSON.stringify(response));
        if (response.status == 200) {
          setHasLoginError(false);
          console.log("hasLoginError: " + hasLoginError);
          Session.token = response.data.token;
          console.log("Session token is: " + Session.token);
          props.homeScreen('HomeScreen');
        } 
      })
      .catch(function(error) {
        setHasLoginError(true);
        console.log("hasLoginError: " + hasLoginError);
      })
  };

  let errorWarning = <View></View>

  if (hasLoginError) {
    errorWarning = <View><Text style={styles.error}>Error en usuario o contraseña</Text></View>
  }

  return (
    <Background>
      <BackButton goBack={() => props.homeScreen('StartScreen')} />

      <Logo />

      <Header>Bienvenido!</Header>
      <Text style={styles.label}>Ingresa tu usuario y contraseña</Text>

      <TextInput
        label="Email / Usuario"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail(text)}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Contraseña"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword(text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      {errorWarning}

      <Button mode="contained" onPress={_onLoginPressed}>
        Iniciar Sesion
      </Button>
      
      <Button style={styles.forgotPassword} mode="contained" onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        Olvidaste tu contraseña?
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>No tenes cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: '#414757'
  },
  link: {
    fontWeight: 'bold',
    color: '#e61c0e',
  },
  error: {
    color: '#ff0033'
  }
});

export default memo(LoginScreen);
