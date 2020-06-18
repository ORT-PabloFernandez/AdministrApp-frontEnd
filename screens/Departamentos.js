import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Card from '../components/Card';

const Departamentos = props => {
    return (
        <View style={styles.departamentosTitle}>
            <Card style={styles.departamentoContainer}>
                <Text>Planta Baja "A"</Text>
                <Button title="Detalle" />
            </Card>
            <Card style={styles.departamentoContainer}>
                <Text>Planta Baja "B"</Text>
                <Button title="Detalle" />
            </Card>
            <Card style={styles.departamentoContainer}>
                <Text>Primer Piso "A"</Text>
                <Button title="Detalle" />
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
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '80%',
        width: 300,
        height: 150
    }
});

export default Departamentos;