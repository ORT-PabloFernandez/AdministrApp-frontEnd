import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/colors';
import Session from '../constants/session';

const Perfil = props => {

    return (
        <View style={styles.perfilTitle}>
            <Text style={styles.content}>Nombre: {Session.user.firstName}</Text>
            <Text style={styles.content}>Apellido: {Session.user.surname}</Text>
            <Text style={styles.content}>Email: {Session.user.email}</Text>
            <Text style={styles.content}>Telefono: {Session.user.phone}</Text>
            <Text style={styles.content}>Password: *******</Text>
            <Text style={styles.content}>Nombre de usuario: {Session.user.username}</Text>
            <Text style={styles.content}>CUIT: {Session.user.cuit}</Text>
            <Text style={styles.content}>Tipo de usuario: {Session.user.type}</Text>
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
    }
});

export default Perfil;