import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from '../components/Card';

const Perfil = props => {
    return (
        <View style={styles.perfilTitle}>
            <Card style={styles.perfilContainer}>
                <Text>Perfil!</Text>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    perfilTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    perfilContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        maxWidth: '80%',
        height: 500,
        maxHeight: '80%'
    }
});

export default Perfil;