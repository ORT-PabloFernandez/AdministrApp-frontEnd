import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const FloatingButton = (props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.TouchableOpacityStyle}
            onPress={props.onPress}>
            <Image
                source={require('../assets/floatingButton.png')}
                style={styles.FloatingButtonStyle}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 75,
        height: 75,
    }
})

export default FloatingButton;