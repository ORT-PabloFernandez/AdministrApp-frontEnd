import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

const Expensas = props => {
    return (
        <View style={styles.expensasTitle}>
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
        backgroundColor: Colors.mainBackground,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    expensasContainer: {
        color: '#000000',
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