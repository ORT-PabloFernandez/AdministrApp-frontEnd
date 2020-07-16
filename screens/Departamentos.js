import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import FloatingButton from '../components/FloatingButton';
import DepartamentosCard from '../components/DepartamentosCard';
import DepartamentosInput from '../components/DepartamentosInput';
import Colors from '../constants/colors';

import Api from '../constants/api';
import Session from '../constants/session';

const axios = require('axios');

const Departamentos = (props) => {

    const [departamentos, setDepartamentos] = useState([]);
    const [userLogged, setUserLogged] = useState(Session.user.type);
    const [isAddMode, setIsAddMode] = useState(false);

    var getDepartamentos = {
        method: 'get',
        url: `${Api.url}/departamentos`,
        headers: {
            'Authorization': `${Session.bearer}${Session.token}`
        }
    };
    console.log("Request is: \n" + JSON.stringify(getDepartamentos));

    axios(getDepartamentos)
        .then(function (response) {
            console.log("Response: \n" + JSON.stringify(response));
            const items = response.data.departamentos.map((item) => {
                console.log("Item: " + JSON.stringify(item));
                return item;
            })
            if (departamentos.length == 0) {
                setDepartamentos(items);
            }
            console.log("Departamentos: \n " + JSON.stringify(departamentos));
        })
        .catch(function (error) {
            console.log("An error ocurred \n");
            console.log(error);
        })

    // floating button solo para administradores
    let floatingButton = <FloatingButton onPress={() => setIsAddMode(true)} />

    const addDepartamentoHandler = () => {
        console.log(new Date() + " addDepartamentoHandler called...\n");

        var getDepartamentos = {
            method: 'get',
            url: `${Api.url}/departamentos`,
            headers: {
                'Authorization': `${Session.bearer}${Session.token}`
            }
        };

        console.log(new Date() + " Request is: \n" + JSON.stringify(getDepartamentos));

        axios(getDepartamentos)
            .then(function (response) {
                console.log(new Date() + " Response: \n" + JSON.stringify(response));
                const items = response.data.departamentos.map((item) => {
                    console.log(new Date() + "Item: " + JSON.stringify(item));
                    return item;
                })
                setDepartamentos(items);
                console.log(new Date() + " Avisos: \n " + JSON.stringify(departamentos));
            })
            .catch(function (error) {
                console.log(new Date() + " An error ocurred \n");
                console.log(error);
            })
        setIsAddMode(false);
    };

    const departamentosDeleteHandler = () => {
        console.log(new Date() + " departamentosDeleteHandler called...\n");

        var getDepartamentos = {
            method: 'get',
            url: `${Api.url}/departamentos`,
            headers: {
                'Authorization': `${Session.bearer}${Session.token}`
            }
        };

        console.log(new Date() + " Request is: \n" + JSON.stringify(getDepartamentos));

        axios(getDepartamentos)
            .then(function (response) {
                console.log(new Date() + " Response: \n" + JSON.stringify(response));
                const items = response.data.departamentos.map((item) => {
                    console.log(new Date() + "Item: " + JSON.stringify(item));
                    return item;
                })
                setDepartamentos(items);
                console.log(new Date() + " Avisos: \n " + JSON.stringify(departamentos));
            })
            .catch(function (error) {
                console.log(new Date() + " An error ocurred \n");
                console.log(error);
            })
    };

    const cancelDepartamentoAdditionHandler = () => {
        setIsAddMode(false);
    };

    if (userLogged != 'administracion') {
        floatingButton = <View></View>
    }

    return (
        <View style={styles.expensasTitle}>
            <View style={styles.screen}>
                <DepartamentosInput
                    visible={isAddMode}
                    onAddDepartamento={addDepartamentoHandler}
                    onCancel={cancelDepartamentoAdditionHandler}
                />
                <FlatList
                    keyExtractor={(item, index) => item._id}
                    data={departamentos}
                    renderItem={(itemData) =>
                        <DepartamentosCard
                            key={itemData.item._id}
                            id={itemData.item._id}
                            title={itemData.item.titulo}
                            onDepartamentoDelete={departamentosDeleteHandler}
                        />}
                />
            </View>
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
    },
    expensasTitle: {
        backgroundColor: Colors.mainBackground,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Departamentos;