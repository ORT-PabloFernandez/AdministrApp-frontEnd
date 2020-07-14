import React, { useState } from 'react';
import {
    Text, View, TextInput, Button, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard
} from 'react-native';

import Api from '../constants/api';
import Session from '../constants/session';

const axios = require('axios');

const DepartamentosInput = (props) => {

    const [enteredTitulo, setEnteredTitulo] = useState('');
    const [enteredDescripcion, setEnteredDescripcion] = useState('');

    const tituloInputHandler = (text) => {
        setEnteredTitulo(text);
    };

    const descripcionInputHandler = (text) => {
        setEnteredDescripcion(text);
    };

    const addDepartamentoHandler = () => {
        var callAddDepartamento = {
            method: 'post',
            url: `${Api.url}/departamento`,
            headers: {
                'Authorization': `${Session.bearer}${Session.token}`
            },
            data: {
                'titulo': enteredTitulo,
                'descripcion': enteredDescripcion,
                'usuarios': 'all'
            }
        };
        console.log("callAddDepartamento with data: " + JSON.stringify(callAddDepartamento.data));

        axios(callAddDepartamento)
            .then(function (response) {
                console.log("callAddDepartamento... \n" + JSON.stringify(response));
                if (response.status == 200) {
                    setEnteredTitulo('');
                    setEnteredDescripcion('');
                    props.onAddDepartamento();
                }
            })
            .catch(function (error) {
                console.log("Error: \n" + error);
            })
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.inputContainer}>
                    <View style={styles.nuevoExtractoWrapper}>
                        <Text style={styles.nuevoExtractoText}>Nuevo Departamento</Text>
                    </View>
                    <TextInput
                        placeholder="Titulo"
                        style={styles.input}
                        onChangeText={tituloInputHandler}
                        value={enteredTitulo}
                    />
                    <TextInput
                        multiline={true}
                        placeholder="Descripcion"
                        style={styles.largeInput}
                        onChangeText={descripcionInputHandler}
                        value={enteredDescripcion}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Cancelar" color="red" onPress={props.onCancel} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Agregar" onPress={addDepartamentoHandler} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
    }
});

export default DepartamentosInput;