import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import AvisosCard from '../components/AvisosCard';
import AvisosInput from '../components/AvisosInput';
import FloatingButton from '../components/FloatingButton';
import Colors from '../constants/colors';

import Api from '../constants/api';
import Session from '../constants/session';

const axios = require('axios');

const Avisos = (props) => {

    const [mensajes, setMensajes] = useState([]);
    const [userLogged, setUserLogged] = useState(Session.user.type);
    const [isAddMode, setIsAddMode] = useState(false);

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

    // floating button solo para administradores
    let floatingButton = <FloatingButton onPress={() => setIsAddMode(true)} />

    const addAvisoHandler = () => {
        console.log(new Date() + " addAvisoHandler called...\n");
        
        var getAvisos = {
            method: 'get',
            url: `${Api.url}/mensajes`,
            headers: {
                'Authorization': `${Session.bearer}${Session.token}`
            }
        };
    
        console.log(new Date() + " Request is: \n" + JSON.stringify(getAvisos));
        
        axios(getAvisos)
        .then(function (response) {
            console.log(new Date() + " Response: \n" + JSON.stringify(response));
            const items = response.data.mensajes.map((item) => {
                console.log(new Date() + "Item: " + JSON.stringify(item));
                return item;
            })
            setMensajes(items);
            console.log(new Date() + " Avisos: \n " + JSON.stringify(mensajes));
        })
        .catch(function (error) {
            console.log(new Date() + " An error ocurred \n");
            console.log(error);
        })
        setIsAddMode(false);
    };

    const avisosDeleteHandler = () => {
        console.log(new Date() + " avisosDeleteHandler called...\n");
        
        var getAvisos = {
            method: 'get',
            url: `${Api.url}/mensajes`,
            headers: {
                'Authorization': `${Session.bearer}${Session.token}`
            }
        };
    
        console.log(new Date() + " Request is: \n" + JSON.stringify(getAvisos));
        
        axios(getAvisos)
        .then(function (response) {
            console.log(new Date() + " Response: \n" + JSON.stringify(response));
            const items = response.data.mensajes.map((item) => {
                console.log(new Date() + "Item: " + JSON.stringify(item));
                return item;
            })
            setMensajes(items);
            console.log(new Date() + " Avisos: \n " + JSON.stringify(mensajes));
        })
        .catch(function (error) {
            console.log(new Date() + " An error ocurred \n");
            console.log(error);
        })
    };

    const cancelAvisoAdditionHandler = () => {
        setIsAddMode(false);
    };

    if (userLogged != 'administracion') {
        floatingButton = <View></View>
    }

    return (
        <View style={styles.screen}>
            <AvisosInput
                visible={isAddMode}
                onAddAviso={addAvisoHandler}
                onCancel={cancelAvisoAdditionHandler}
            />
            <FlatList
                keyExtractor={(item, index) => item._id}
                data={mensajes}
                renderItem={(itemData) =>
                    <AvisosCard
                        key={itemData.item._id}
                        id={itemData.item._id}
                        title={itemData.item.titulo}
                        onAvisoDelete={avisosDeleteHandler}
                    />}
            />
            {floatingButton}
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