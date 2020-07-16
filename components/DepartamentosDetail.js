import React, { useState } from 'react';
import {
    Text, View,Button, StyleSheet, Modal
} from 'react-native';

import Api from '../constants/api';
import Session from '../constants/session';

const axios = require('axios');

const DepartamentosDetail = (props) => {

    const [departamento, setDepartamento] = useState();

    console.log(new Date() + " props.onDetail id " + props.detailId);

    var getDepartamento = {
        method: 'get',
        url: `${Api.url}/departamento/${props.detailId}`,
        headers: {
            'Authorization': `${Session.bearer}${Session.token}`
        }
    };

    console.log(new Date() + " Request is: \n" + JSON.stringify(getDepartamento));

    axios(getDepartamento)
        .then(function (response) {
            console.log(new Date() + " Response: \n" + JSON.stringify(response));
            console.log(new Date() + " departamento is " + JSON.stringify(departamento));
            if (!departamento) {
                setDepartamento(response.data.departamento);
            }
        })
        .catch(function (error) {
            console.log(new Date() + " An error ocurred \n");
            console.log(error);
        })

    let content = null; 

    if (departamento) {
        content = <View>
            <View>
                <Text style={styles.titulo}>{departamento.titulo}</Text>
                <Text style={styles.descripcion}>Detalle:</Text>
                <Text style={styles.descripcion}>{departamento.descripcion}</Text>
            </View>
        </View>
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <View style={styles.nuevoExtractoWrapper}>
                    <Text style={styles.nuevoExtractoText}>Detalle del Departamento</Text>
                    {content}
                </View>
                <View style={styles.button}>
                    <Button title="Cerrar" color="red" onPress={props.onCancel} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        // con flex: 1 (o cualquier otro valor) el child element toma todo el 
        // espacio disponible, si se agregan otros childs juntos, se distribuyen el espacio
        // en funcion de los valores asignados a la propiedad flex
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    largeInput: {
        height: 200,
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '45%'
    },
    nuevoExtractoWrapper: {
        margin: 20
    },
    nuevoExtractoText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5632',
        marginVertical: 20,
        textAlign: 'center',
        borderColor: '#FF5632',
        borderWidth: 2
    },
    descripcion: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default DepartamentosDetail;