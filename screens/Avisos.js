import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const axios = require('axios');

let content = axios.get('http://localhost:3000/api/mensaje')
    .then(function (response) {
        response.mensajes.forEach(mensaje => {
            <View>
                <Text>
                    {mensaje.descripcion}
                </Text>
            </View>
        });
    })
    .catch(function (error) {
        <View>
            <Text>
                Error
            </Text>
        </View>
    })

const Avisos = (props) => {
    return (
        <View style={styles.screen}>
            <Text>
                {Object.values(content)}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Avisos;