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

const utils = require('../core/utils');

const axios = require('axios');

const RegisterScreen = (props) => {

  const [hasSignUpError, setHasSignUpError] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [cuit, setCuit] = useState('');
  const [type, setType] = useState('');
  const [dataIsOk, setDataIsOk] = useState();

  console.log(new Date() + " dataIsOk is: " + dataIsOk);

  if (dataIsOk) {
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
    console.log(new Date() + " callSignUp for " + JSON.stringify(email));

    axios(callSignUp)
      .then(function (response) {
        console.log(new Date() + " callSignUp... \n" + JSON.stringify(response));
        if (response.status == 200) {
          setHasSignUpError(false);
          console.log(new Date() + " hasSignUpError: " + hasSignUpError);
          Session.user.firstName = response.data.nombre;
          Session.user.surname = response.data.apellido;
          Session.user.email = response.data.email;
          Session.user.phone = response.data.telefono;
          Session.user.username = response.data.nombreUsuario;
          Session.user.cuit = response.data.cuit;
          Session.user.type = response.data.tipo;
          Session.token = response.data.token;
          console.log(new Date() + " Session token is: " + Session.token);
          props.homeScreen('HomeScreen');
        }
      })
      .catch(function (error) {
        setHasSignUpError(true);
        console.log(new Date() + " hasSignUpError: " + hasSignUpError);
      })
  }

  const _onSignUpPressed = () => {

    console.log(new Date + " _onSignUpPressed...");

    if (
      utils.nameValidator(firstname) != '' ||
      utils.surnameValidator(surname) != '' ||
      utils.usernameValidator(username) != '' ||
      utils.emailValidator(email) != '' ||
      utils.phoneValidator(phone) != '' ||
      utils.passwordValidator(password) != '' ||
      utils.cuitValidator(cuit) != '' ||
      utils.typeValidator(type) != ''
      ) {
      console.log(new Date() + " user data has errors!");
      setDataIsOk(false);
    } else {
      console.log(new Date() + " user data is OK!");
      setDataIsOk(true);
    }

    console.log(new Date() + " firstnameValidator " + utils.nameValidator(firstname));
    console.log(new Date() + " surnameValidator " + utils.surnameValidator(surname));
    console.log(new Date() + " usernameValidator " + utils.usernameValidator(username));
    console.log(new Date() + " emailValidator " + utils.emailValidator(email));
    console.log(new Date() + " phoneValidator " + utils.phoneValidator(phone));
    console.log(new Date() + " passwordValidator " + utils.passwordValidator(password));
    console.log(new Date() + " cuitValidator " + utils.cuitValidator(cuit));
    console.log(new Date() + " typeValidator " + utils.typeValidator(type));

  };

  let nameErrorWarning = <View></View>
  let surnameErrorWarning = <View></View>
  let usernameErrorWarning = <View></View>
  let emailErrorWarning = <View></View>
  let phoneErrorWarning = <View></View>
  let passwordErrorWarning = <View></View>
  let cuitErrorWarning = <View></View>
  let typeErrorWarning = <View></View>

  if (dataIsOk == false) {
    nameErrorWarning = <View><Text style={styles.error}>{utils.nameValidator(firstname)}</Text></View>
    surnameErrorWarning = <View><Text style={styles.error}>{utils.surnameValidator(surname)}</Text></View>
    usernameErrorWarning = <View><Text style={styles.error}>{utils.usernameValidator(username)}</Text></View>
    emailErrorWarning = <View><Text style={styles.error}>{utils.emailValidator(email)}</Text></View>
    phoneErrorWarning = <View><Text style={styles.error}>{utils.phoneValidator(phone)}</Text></View>
    passwordErrorWarning = <View><Text style={styles.error}>{utils.passwordValidator(password)}</Text></View>
    cuitErrorWarning = <View><Text style={styles.error}>{utils.cuitValidator(cuit)}</Text></View>
    typeErrorWarning = <View><Text style={styles.error}>{utils.typeValidator(type)}</Text></View>
  }

  return (
    <ScrollView style={styles.scrollView}>
      <Background>
        <BackButton goBack={() => props.homeScreen('StartScreen')} />

        <Logo />

        <Header>Crear cuenta</Header>

        <TextInput
          label="Nombre"
          returnKeyType="next"
          value={firstname.value}
          onChangeText={text => setFirstName(text)}
        />
        {nameErrorWarning}

        <TextInput
          label="Apellido"
          returnKeyType="next"
          value={surname.value}
          onChangeText={text => setSurname(text)}
        />
        {surnameErrorWarning}

        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        {emailErrorWarning}

        <TextInput
          label="Telefono"
          returnKeyType="next"
          value={phone.value}
          onChangeText={text => setPhone(text)}
          keyboardType='number-pad'
        />
        {phoneErrorWarning}

        <TextInput
          label="Usuario"
          returnKeyType="next"
          value={username.value}
          onChangeText={text => setUserName(text)}
          error={!!username.error}
          errorText={username.error}
        />
        {usernameErrorWarning}

        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword(text)}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        {passwordErrorWarning}

        <TextInput
          label="CUIT"
          returnKeyType="next"
          value={cuit.value}
          onChangeText={text => setCuit(text)}
          error={!!cuit.error}
          errorText={cuit.error}
          keyboardType='number-pad'
        />
        {cuitErrorWarning}

        <TextInput
          label="Tipo Usuario"
          returnKeyType="next"
          value={type.value}
          onChangeText={text => setType(text)}
          error={!!type.error}
          errorText={type.error}
        />
        {typeErrorWarning}

        <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
          Registrarse
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
  error: {
    color: '#ff0033'
  }
});

export default memo(RegisterScreen);
