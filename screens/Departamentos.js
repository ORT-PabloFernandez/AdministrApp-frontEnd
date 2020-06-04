import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Departamentos = props => {
    return (
        <View style={styles.departamentosTitle}>
            <Text>Departamentos!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    departamentosTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Departamentos;