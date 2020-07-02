import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from '../components/Card';
import api from '../constants/api';

const axios = require('axios');

const Avisos = (props) => {

    const [mensajes, setMensajes] = useState([]);

    var getMensajes = {
        method: 'get',
        url: `${api.url}/mensajes`,
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZWYzZDNlMzdkYjNmMDEyMWUzYjVkMzUiLCJpYXQiOjE1OTMwMzc4MTUsImV4cCI6MTU5NDI0NzQxNX0.RGiIy93Yj12KXLogjvLcW0-ROxXrmOS2iXXEvaGCEEM'
        }
    };

    axios(getMensajes)
        .then(function (response) {
            console.log("Response: \n" + JSON.stringify(response));
            const items = response.data.mensajes.map((item) => {
                console.log("Item: " + JSON.stringify(item));
                return (
                    <Card style={styles.avisosContainer}>
                        <Text style={styles.avisosText}>
                            {item.descripcion}
                        </Text>
                    </Card>
                );
            })
            console.log("Items: " + JSON.stringify(items));
            if (mensajes.length == 0) {
                setMensajes(items);
            }
        })
        .catch(function (error) {
            console.log("An error ocurred \n");
            console.log(error);
        })

    return (
        <View style={styles.screen}>
            {mensajes}
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avisosContainer: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '80%',
        width: 300,
        height: 100,
        maxHeight: '80%'
    },
    avisosText: {
        fontSize: 18
    }
})

export default Avisos;