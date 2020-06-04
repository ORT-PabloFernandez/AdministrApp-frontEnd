import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Expensas = props => {
    return (
        <View style={styles.expensasTitle}>
            <Text>Expensas!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    expensasTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Expensas;