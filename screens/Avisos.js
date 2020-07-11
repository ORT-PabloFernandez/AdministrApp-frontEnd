import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import ExpensasCard from '../components/ExpensasCard';
import Colors from '../constants/colors';

import Api from '../constants/api';
import Session from '../constants/session';

const axios = require('axios');

const Avisos = (props) => {

    const [mensajes, setMensajes] = useState([]);

    var getMensajes = {
        method: 'get',
        url: `${Api.url}/mensajes`,
        headers: {
            'Authorization': `${Session.bearer}${Session.token}`
        }
    };

    console.log("Request is: \n" + JSON.stringify(getMensajes));

    axios(getMensajes)
        .then(function (response) {
            console.log("Response: \n" + JSON.stringify(response));
            const items = response.data.mensajes.map((item) => {
                console.log("Item: " + JSON.stringify(item));
                return item;
            })
            if (mensajes.length == 0) {
                setMensajes(items);
            }
            console.log("Mensajes: \n " + JSON.stringify(mensajes));
        })
        .catch(function (error) {
            console.log("An error ocurred \n");
            console.log(error);
        })

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item, index) => item._id}
                data={mensajes}
                renderItem={(itemData) =>
                    <ExpensasCard
                        key={itemData.item._id}
                        id={itemData.item._id}
                        title={itemData.item.titulo}
                    />}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.mainBackground,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100
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