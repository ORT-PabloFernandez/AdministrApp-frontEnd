import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Card from '../components/Card';
import FloatingButton from '../components/ExpensasFloatingButton';
import ExpensasInput from '../components/ExpensasInput';
import Colors from '../constants/colors';
import Session from '../constants/session';

const Expensas = props => {

    const [userLogged, setUserLogged] = useState(Session.user.type);
    const [isAddMode, setIsAddMode] = useState(false);

    let deleteButton = <Button title="Borrar" color="#FF0000" />

    let floatingButton = <FloatingButton onPress={() => setIsAddMode(true)} />

    const addExpensaHandler = (expensa) => {
        // logica para agregar nueva expensa
        setIsAddMode(false);
    };

    const cancelExpensaAdditionHandler = () => {
        setIsAddMode(false);
    };

    if (userLogged != 'administracion') {
        deleteButton = <View></View>
        floatingButton = <View></View>
    }

    return (
        <View style={styles.expensasTitle}>
            {floatingButton}
            <ExpensasInput
                visible={isAddMode}
                onAddExpensa={addExpensaHandler}
                onCancel={cancelExpensaAdditionHandler}
            />
            <View>
                <Card style={styles.expensasContainer}>
                    <Text style={styles.expensasText}>Ene 2020</Text>
                    <Button title="Detalle" />
                    {deleteButton}
                </Card>
                <Card style={styles.expensasContainer}>
                    <Text style={styles.expensasText}>Feb 2020</Text>
                    <Button title="Detalle" />
                    {deleteButton}
                </Card>
                <Card style={styles.expensasContainer}>
                    <Text style={styles.expensasText}>Mar 2020</Text>
                    <Button title="Detalle" />
                    {deleteButton}
                </Card>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    expensasTitle: {
        backgroundColor: Colors.mainBackground,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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