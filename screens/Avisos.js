import React, { useState } from 'react';
import { View, Text } from 'react-native';

const axios = require('axios');

const Avisos = (props) => {

    const [mensajes, setMensajes] = useState([]);

    axios.get('http://localhost:3000/api/mensaje')
        .then(function (response) {
            console.log(JSON.stringify(response));
            setMensajes(JSON.stringify(response.data.mensajes));
        })
        .catch(function (error) {
            console.log("An error ocurred \n" + error);
        })

    return (
        <View>
            <Text>
                {mensajes}
            </Text>
        </View>
    )
};

export default Avisos;