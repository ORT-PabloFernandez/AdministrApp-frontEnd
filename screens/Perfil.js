import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainHeader from '../components/MainHeader';
import Card from '../components/Card';

const Perfil = props => {
    return (
        <View>
            <MainHeader />
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