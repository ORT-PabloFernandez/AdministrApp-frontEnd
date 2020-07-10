import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';

import Api from '../constants/api';
import Session from '../constants/session';

const axios = require('axios');

const RegisterScreen = (props) => {

    const[hasSignUpError, setHasSignUpError] = useState(false);

    const [firstname, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cuit, setCuit] = useState('');
    const [type, setType] = useState('');

    const _onSignUpPressed = () => {

        console.log("_onSignUpPressed...");
        var callSignUp = {
          method: 'post',
          url: `${Api.url}/users/signup`,
          data: {
            'nombre': firstname, 
            'apellido': surname, 
            'email': email, 
            'telefono': phone, 
            'nombreUsuario': username, 
            'password': password, 
            'cuit': cuit, 
            'tipo': type
          }
        };
        console.log("callSignUp for " + JSON.stringify(email));
    
        axios(callSignUp)
          .then(function(response){
            console.log("callSignUp... \n" + JSON.stringify(response));
            if (response.status == 200) {
              setHasSignUpError(false);
              console.log("hasSignUpError: " + hasSignUpError);
              Session.user.firstName = response.data.nombre;
              Session.user.surname = response.data.apellido;
              Session.user.email = response.data.email;
              Session.user.phone = response.data.telefono;
              Session.user.username = response.data.nombreUsuario;
              Session.user.cuit = response.data.cuit;
              Session.user.type = response.data.tipo;
              Session.token = response.data.token;
              console.log("Session token is: " + Session.token);
              props.homeScreen('HomeScreen');
            } 
          })
          .catch(function(error) {
            setHasSignUpError(true);
            console.log("hasSignUpError: " + hasSignUpError);
          })
      };

  return (
<ScrollView style={styles.scrollView}>
    <Background>
      <BackButton goBack={() => props.homeScreen('StartScreen')} />

      <Logo />

      <Header>Create Account</Header>

      <TextInput
        label="Nombre"
        returnKeyType="next"
        value={firstname.value}
        onChangeText={text => setFirstName(text)}
        error={!!firstname.error}
        errorText={firstname.error}
      />
    
      <TextInput
        label="Apellido"
        returnKeyType="next"
        value={surname.value}
        onChangeText={text => setSurname(text)}
        error={!!surname.error}
        errorText={surname.error}
      />

      <TextInput
        label="Email"
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
        label="Telefono"
        returnKeyType="next"
        value={phone.value}
        onChangeText={text => setPhone(text)}
        error={!!phone.error}
        errorText={phone.error}
      />

    <TextInput
        label="Usuario"
        returnKeyType="next"
        value={username.value}
        onChangeText={text => setUserName(text)}
        error={!!username.error}
        errorText={username.error}
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword(text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

    <TextInput
        label="CUIT"
        returnKeyType="next"
        value={cuit.value}
        onChangeText={text => setCuit(text)}
        error={!!cuit.error}
        errorText={cuit.error}
      />

    <TextInput
        label="Tipo Usuario"
        returnKeyType="next"
        value={type.value}
        onChangeText={text => setType(text)}
        error={!!type.error}
        errorText={type.error}
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>
    </Background>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#414757',
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: '#414757'
  },
});

export default memo(RegisterScreen);
