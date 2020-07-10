import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const ExpensasInput = (props) => {

    const [enteredExpensa, setEnteredExpensa] = useState('');

    const expensaInputHandler = (enteredText) => {
        setEnteredExpensa(enteredText);
    };

    const addExpensaHandler = () => {
        props.onAddExpensa(enteredExpensa);
        setEnteredExpensa('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Mes / Año"
                    style={styles.input}
                    onChangeText={expensaInputHandler}
                    value={enteredExpensa}
                />
                <TextInput
                    placeholder="Monto"
                    style={styles.input}
                    onChangeText={expensaInputHandler}
                    value={enteredExpensa}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancelar" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Agregar" onPress={addExpensaHandler} />
                    </View>
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
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '45%'
    }
});

export default ExpensasInput;