import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import Session from '../constants/session';

const keyGenerator = require('../core/keyGenerator');

// props.style es una prop definida para el componente card, no es el style que tienen
// todos los componentes de react-native por defecto
const ExpensasCard = props => {

    const [userLogged, setUserLogged] = useState(Session.user.type);

    let deleteButton = <Button title="Borrar" color="#FF0000" />

    if (userLogged != 'administracion') {
        deleteButton = null;
    }

    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
            <View style={styles.textContainer} >
                <Text style={styles.textStyle} >{props.title}</Text>
            </View>
            <Button title="Detalle" />
            {deleteButton}
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 8,
        backgroundColor: 'white',
        padding: 30,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'center'
    },
    textContainer: {
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 18
    }
});

export default ExpensasCard;

