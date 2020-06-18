import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Card from '../components/Card';
import Header from '../components/Header';

const Expensas = props => {
    return (
        <View style={styles.expensasTitle}>
            <Header />
            <View>
                <Card style={styles.expensasContainer}>
                    <Text style={styles.expensasText}>Enero 2020</Text>
                    <Button title="Detalle" />
                </Card>
                <Card style={styles.expensasContainer}>
                    <Text style={styles.expensasText}>Febrero 2020</Text>
                    <Button title="Detalle" />
                </Card>
                <Card style={styles.expensasContainer}>
                    <Text style={styles.expensasText}>Marzo 2020</Text>
                    <Button title="Detalle" />
                </Card>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    expensasTitle: {
        flex: 1,
        alignItems: 'center'
    },
    expensasContainer: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '80%',
        width: 300,
        height: 100,
        maxHeight: '80%'
    },
    expensasText: {
        fontSize: 18
    }
});

export default Expensas;