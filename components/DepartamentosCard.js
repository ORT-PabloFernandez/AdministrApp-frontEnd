import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import Api from '../constants/api';
import Session from '../constants/session';

import DepartamentosDetail from '../components/DepartamentosDetail';

const axios = require('axios');


// props.style es una prop definida para el componente card, no es el style que tienen
// todos los componentes de react-native por defecto
const DepartamentosCard = props => {

    const [userLogged, setUserLogged] = useState(Session.user.type);
    const [isDetailMode, setIsDetailMode] = useState(false);

    const detalleDepartamentoHandler = (id) => {
        setIsDetailMode(true);
    }

    const cancelDepartamentoDetailHandler = () => {
        setIsDetailMode(false);
    }

    const deleteDepartamentoHandler = (id) => {
        console.log(new Date() + " Departamento id: " + id);
        // request para deleteDepartamento
        var deleteDepartamento = {
            method: 'delete',
            url: `${Api.url}/departamento/${id}`,
            headers: {
                'Authorization': `${Session.bearer}${Session.token}`
            }
        };

        axios(deleteDepartamento)
            .then(function (response) {
                console.log(new Date() + " Calling props.onDepartamentoDelete... \n");
                props.onDepartamentoDelete();
            })
            .catch(function (error) {
                console.log(new Date() + " An error ocurred \n");
                console.log(error);
            })
    };

    let deleteButton = <Button title="Borrar" color="#FF0000" onPress={deleteDepartamentoHandler.bind(this, props.id)} />

    if (userLogged != 'administracion') {
        deleteButton = null;
    }

    return (
        <View style={{ ...styles.card, ...props.style }}>
            <DepartamentosDetail
                visible={isDetailMode}
                onCancel={cancelDepartamentoDetailHandler}
                detailId={props.id}
            />
            {props.children}
            <View style={styles.textContainer} >
                <Text style={styles.textStyle} >{props.title}</Text>
            </View>
            <View style={styles.buttonMargin}>
                <Button title="Detalle" onPress={detalleDepartamentoHandler} />
            </View>
            <View>
                {deleteButton}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 8,
        backgroundColor: 'white',
        padding: 30,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'center'
    },
    textContainer: {
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonMargin: {
        marginHorizontal: 10
    }
});

export default DepartamentosCard;

