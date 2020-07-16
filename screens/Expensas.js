import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

import FloatingButton from '../components/FloatingButton';
import ExpensasCard from '../components/ExpensasCard';
import ExpensasInput from '../components/ExpensasInput';
import Colors from '../constants/colors';
import Api from '../constants/api';
import Session from '../constants/session';

const axios = require('axios');

const Expensas = props => {

    const [expensas, setExpensas] = useState([]);
    const [userLogged, setUserLogged] = useState(Session.user.type);
    const [isAddMode, setIsAddMode] = useState(false);

    // request para getExpensas
    var getExpensas = {
        method: 'get',
        url: `${Api.url}/expensas`,
        headers: {
            'Authorization': `${Session.bearer}${Session.token}`
        }
    };

    console.log(new Date() + " Request is: \n" + JSON.stringify(getExpensas));

    axios(getExpensas)
        .then(function (response) {
            console.log(new Date() + " Response: \n" + JSON.stringify(response));
            const items = response.data.expensas.map((item) => {
                console.log(new Date() + " Item: " + JSON.stringify(item));
                return item;
            })
            if (expensas.length == 0) {
                setExpensas(items);
            }
            console.log(new Date() + " Expensas: \n " + JSON.stringify(expensas));
        })
        .catch(function (error) {
            console.log(new Date() + " An error ocurred \n");
            console.log(error);
        })


    // floating button solo para administradores
    let floatingButton = <FloatingButton onPress={() => setIsAddMode(true)} />

    const addExpensaHandler = () => {
        console.log(new Date() + " addExpensaHandler called...\n");
        
        var getExpensas = {
            method: 'get',
            url: `${Api.url}/expensas`,
            headers: {
                'Authorization': `${Session.bearer}${Session.token}`
            }
        };
    
        console.log(new Date() + " Request is: \n" + JSON.stringify(getExpensas));
        
        axios(getExpensas)
        .then(function (response) {
            console.log(new Date() + " Response: \n" + JSON.stringify(response));
            const items = response.data.expensas.map((item) => {
                console.log(new Date() + "Item: " + JSON.stringify(item));
                return item;
            })
            setExpensas(items);
            console.log(new Date() + " Expensas: \n " + JSON.stringify(expensas));
        })
        .catch(function (error) {
            console.log(new Date() + " An error ocurred \n");
            console.log(error);
        })
        setIsAddMode(false);
    };

    const expensasDeleteHandler = () => {
        console.log(new Date() + " expensasDeleteHandler called...\n");
        
        var getExpensas = {
            method: 'get',
            url: `${Api.url}/expensas`,
            headers: {
                'Authorization': `${Session.bearer}${Session.token}`
            }
        };
    
        console.log(new Date() + " Request is: \n" + JSON.stringify(getExpensas));
        
        axios(getExpensas)
        .then(function (response) {
            console.log(new Date() + " Response: \n" + JSON.stringify(response));
            const items = response.data.expensas.map((item) => {
                console.log(new Date() + "Item: " + JSON.stringify(item));
                return item;
            })
            setExpensas(items);
            console.log(new Date() + " Expensas: \n " + JSON.stringify(expensas));
        })
        .catch(function (error) {
            console.log(new Date() + " An error ocurred \n");
            console.log(error);
        })
    };

    const cancelExpensaAdditionHandler = () => {
        setIsAddMode(false);
    };

    if (userLogged != 'administracion') {
        floatingButton = <View></View>
    }

    return (
        <View style={styles.expensasTitle}>
            <ExpensasInput
                visible={isAddMode}
                onAddExpensa={addExpensaHandler}
                onCancel={cancelExpensaAdditionHandler}
            />
            <View style={styles.screen}>
                <FlatList
                    keyExtractor={(item, index) => item._id}
                    data={expensas}
                    renderItem={(itemData) =>
                        <ExpensasCard
                            key={itemData.item._id}
                            id={itemData.item._id}
                            title={itemData.item.titulo}
                            onExpensaDelete={expensasDeleteHandler}
                        />}
                />
            </View>
            {floatingButton}
        </View>
    );
};

const styles = StyleSheet.create({
    expensasTitle: {
        backgroundColor: Colors.mainBackground,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:100
    },
    expensasContainer: {
        color: '#000000',
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '80%',
        width: 300,
        height: 100,
        maxHeight: '80%'
    },
    expensasText: {
        fontSize: 18
    }
});

export default Expensas;