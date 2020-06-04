import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Perfil = props => {
    return (
        <View style={styles.perfilTitle}>
            <Text>Perfil!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    perfilTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Perfil;