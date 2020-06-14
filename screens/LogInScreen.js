import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LogInScreen = props => {
    return (
        <View>
        <View>
            <Text>Bienvenido a AdminisTrApp</Text>
        </View>
        <Button title="Ingresar"/>
        </View>
    )
};

const styles=StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default LogInScreen;