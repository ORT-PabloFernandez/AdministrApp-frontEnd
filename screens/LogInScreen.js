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
      url: `${Api.url}/users/login`,
      data: {
        'email': email,
        'password': password
      }
    };
    console.log("callLogin for " + JSON.stringify(email));

    axios(callLogin)
      .then(function (response) {
        console.log("callLogin... \n" + JSON.stringify(response));
        if (response.status == 200) {
          console.log("Server response: \n" + JSON.stringify(response));
          Session.user.firstName = response.data.nombre;
          Session.user.surname = response.data.apellido;
          Session.user.email = response.data.email;
          Session.user.phone = response.data.telefono;
          Session.user.username = response.data.nombreUsuario;
          Session.user.cuit = response.data.cuit;
          Session.user.type = response.data.tipo;
          console.log("Session user: \n" + JSON.stringify(Session.user));
          setHasLoginError(false);
          console.log("hasLoginError: " + hasLoginError);
          Session.token = response.data.token;
          console.log("Session token is: " + Session.token);
          props.homeScreen('HomeScreen');
        }
      })
      .catch(function (error) {
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

    </Background >

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
