import React, { useState } from 'react';
import {
    Text, View, TextInput, Button, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard
} from 'react-native';

import Api from '../constants/api';
import Session from '../constants/session';

const axios = require('axios');
const utils = require('../core/utils');

const ExpensasInput = (props) => {

    const [enteredTitulo, setEnteredTitulo] = useState('');
    const [enteredMonto, setEnteredMonto] = useState('');
    const [enteredDescripcion, setEnteredDescripcion] = useState('');
    const [dataIsOk, setDataIsOk] = useState();

    console.log(new Date() + " dataIsOk is: " + dataIsOk);

    if (dataIsOk) {
        var callAddExpensa = {
            method: 'post',
            url: `${Api.url}/expensa`,
            headers: {
                'Authorization': `${Session.bearer}${Session.token}`
            },
            data: {
                'titulo': enteredTitulo,
                'monto': enteredMonto,
                'descripcion': enteredDescripcion,
                'usuarios': 'all'
            }
        };
        console.log("callAddExpensa with data: " + JSON.stringify(callAddExpensa.data));

        axios(callAddExpensa)
            .then(function (response) {
                console.log("callAddExpensa... \n" + JSON.stringify(response));
                if (response.status == 200) {
                    setEnteredTitulo('');
                    setEnteredMonto('');
                    setEnteredDescripcion('');
                    props.onAddExpensa();
                }
            })
            .catch(function (error) {
                console.log("Error: \n" + error);
            })
    }

    const tituloInputHandler = (text) => {
        setEnteredTitulo(text);
    };

    const montoInputHandler = (text) => {
        setEnteredMonto(text);
    };

    const descripcionInputHandler = (text) => {
        setEnteredDescripcion(text);
    };

    const addExpensaHandler = () => {

        console.log(new Date + " addExpensaHandler...");

        if (
            utils.tituloValidator(enteredTitulo) != '' ||
            utils.montoValidator(enteredMonto) != '' ||
            utils.descripcionValidator(enteredDescripcion) != ''
        ) {
            console.log(new Date() + " user data has errors!");
            setDataIsOk(false);
        } else {
            console.log(new Date() + " user data is OK!");
            setDataIsOk(true);
        }

        console.log(new Date() + " tituloValidator " + utils.tituloValidator(enteredTitulo));
        console.log(new Date() + " montoValidator " + utils.montoValidator(enteredMonto));
        console.log(new Date() + " descripcionValidator " + utils.descripcionValidator(enteredDescripcion));

    };

    const cancelExpensaHandler = () => {
        props.onCancel();
        setDataIsOk();
        setEnteredTitulo('');
        setEnteredMonto('');
        setEnteredDescripcion('');
    };

    let tituloErrorWarning = <View></View>
    let montoErrorWarning = <View></View>
    let descripcionErrorWarning = <View></View>

    if (dataIsOk == false) {
        tituloErrorWarning = <View style={styles.errorWrapper}><Text style={styles.error}>{utils.tituloValidator(enteredTitulo)}</Text></View>
        montoErrorWarning = <View style={styles.errorWrapper}><Text style={styles.error}>{utils.montoValidator(enteredMonto)}</Text></View>
        descripcionErrorWarning = <View style={styles.errorWrapper}><Text style={styles.error}>{utils.descripcionValidator(enteredDescripcion)}</Text></View>
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.inputContainer}>
                    <View style={styles.nuevoExtractoWrapper}>
                        <Text style={styles.nuevoExtractoText}>Nuevo extracto</Text>
                    </View>
                    <TextInput
                        placeholder="Titulo"
                        style={styles.input}
                        onChangeText={tituloInputHandler}
                        value={enteredTitulo}
                    />
                    {tituloErrorWarning}
                    <TextInput
                        placeholder="Monto"
                        style={styles.input}
                        onChangeText={montoInputHandler}
                        value={enteredMonto}
                        keyboardType='number-pad'
                    />
                    {montoErrorWarning}
                    <TextInput
                        multiline={true}
                        placeholder="Descripcion"
                        style={styles.largeInput}
                        onChangeText={descripcionInputHandler}
                        value={enteredDescripcion}
                    />
                    {descripcionErrorWarning}
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Cancelar" color="red" onPress={cancelExpensaHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Agregar" onPress={addExpensaHandler} />
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
        marginBottom: 5,
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
    error: {
        color: '#ff0033'
    },
    errorWrapper: {
        width: '80%',
        padding: 10,
    }
});

export default ExpensasInput;