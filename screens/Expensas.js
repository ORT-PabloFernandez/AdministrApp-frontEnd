import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from '../components/Card';

const Expensas = props => {
    return (
        <View style={styles.expensasTitle}>
            <Card style={styles.expensasContainer}>
                <Text>Expensas!</Text>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    expensasTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    expensasContainer: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '80%',
        width: 300,
        height: 300,
        maxHeight: '80%'
    }
});

export default Expensas;