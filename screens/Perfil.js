import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Restart} from 'fiction-expo-restart';

import Colors from '../constants/colors';
import Session from '../constants/session';
import Card from '../components/Card';
import AvatarUser from '../components/AvatarUser';
import Background from '../components/Background';


const Perfil = props => {

    const _onLogoutPressed = () => {
        Session.user.firstName = null;
        Session.user.surname = null;
        Session.user.email = null;
        Session.user.phone = null;
        Session.user.username = null;
        Session.user.cuit = null;
        Session.user.type = null;
        Restart();
    }

    return (

        <View style={styles.perfilTitle}>

        <AvatarUser />

        <Text style={styles.content}> {Session.user.username}</Text>
            <View style={styles.noContainer}>
                <Text style={styles.content}> {Session.user.type}</Text> 
            </View>

        <Card style={styles.profileInfoContainer}>

            <Text style={styles.content}> Nombre</Text>
            <View style={styles.container}>
                <Text style={styles.content}> {Session.user.firstName} </Text> 
            </View>

            <Text style={styles.content}> Apellido</Text>
            <View style={styles.container}>
                <Text style={styles.content}> {Session.user.surname} </Text> 
            </View>

            <Text style={styles.content}> Email</Text>
            <View style={styles.container}>
                <Text style={styles.content}> {Session.user.email}</Text> 
            </View>

            <Text style={styles.content}> Telefono</Text>
            <View style={styles.container}>
                <Text style={styles.content}> {Session.user.phone}</Text> 
            </View>

            <Text style={styles.content}> CUIT</Text>
            <View style={styles.container}>
                <Text style={styles.content}> {Session.user.cuit}</Text> 
            </View>

            <Button title="Logout" onPress={_onLogoutPressed}/>

            </Card>
        </View>
        
    );
};

const styles = StyleSheet.create({
    perfilTitle: {
        backgroundColor: Colors.mainBackground,

        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    content: {
        textAlign: 'center'
    },
    container: {
        marginVertical: 12,
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1
      },
    noContainer: {
        marginVertical: 12,
    },
    profileInfoContainer: {
        margin: 20,
        justifyContent: 'space-between'
    }

});

export default Perfil;