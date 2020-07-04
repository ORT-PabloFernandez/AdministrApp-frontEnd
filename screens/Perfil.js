import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Perfil = props => {
    return (
        <View style={styles.perfilTitle}>
            <Text style={styles.content}>Contenido del perfil</Text>
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