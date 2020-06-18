import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';

const Perfil = props => {
    return (
        <View>
            <Header />
            <Text>hello</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    perfilTitle: {
        flex: 1
    }
});

export default Perfil;