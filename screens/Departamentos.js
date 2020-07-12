import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import FloatingButton from '../components/FloatingButton';
import ExpensasCard from '../components/ExpensasCard';
import Colors from '../constants/colors';

import Api from '../constants/api';
import Session from '../constants/session';

const axios = require('axios');

const Departamentos = (props) => {

    const [departamentos, setDepartamentos] = useState([]);
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

    return (
    <View style={styles.expensasTitle}> 
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item, index) => item._id}
                data={departamentos}
                renderItem={(itemData) =>
                    <ExpensasCard
                        key={itemData.item._id}
                        id={itemData.item._id}
                        title={itemData.item.titulo}
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
        alignItems: 'center',
        paddingTop:100
    },
})

export default Departamentos;

/*
const Departamentos = props => {
    return (
        <View style={styles.departamentosTitle}>
            <Card style={styles.departamentoContainer}>
                <Text>Planta Baja "A"</Text>
                <Button title="Detalle" />
            </Card>
            <Card style={styles.departamentoContainer}>
                <Text>Planta Baja "B"</Text>
                <Button title="Detalle" />
            </Card>
            <Card style={styles.departamentoContainer}>
                <Text>Primer Piso "A"</Text>
                <Button title="Detalle" />
            </Card>
        </View>
    );
};


const styles = StyleSheet.create({
    departamentosTitle: {
        backgroundColor: Colors.mainBackground,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    departamentoContainer: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '80%',
        width: 300,
        height: 150
    }
});

export default Departamentos;
*/
