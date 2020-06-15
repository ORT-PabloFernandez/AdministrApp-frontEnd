import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from '../components/Card';

const Departamentos = props => {
    return (
        <View style={styles.departamentosTitle}>
            <Card style={styles.departamentoContainer}>
                <Text>Departamento 1</Text>
            </Card>
            <Card style={styles.departamentoContainer}>
                <Text>Departamento 2</Text>
            </Card>
            <Card style={styles.departamentoContainer}>
                <Text>Departamento 3</Text>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    departamentosTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    departamentoContainer: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '80%',
        width: 300,
        height: 150
    }
});

export default Departamentos;