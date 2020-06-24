import React from 'react';
import { View, Text } from 'react-native';

const axios = require('axios'); 



const Avisos = ( props ) => {
    return (

        axios.get('http://localhost:3000/api/mensaje')
            .then(function (response) {
                response.mensajes.forEach(mensaje => {
                    <View>
                        <Text>
                            {mensaje.descripcion};
                        </Text>
                    </View>
                });
            // handle success
            console.log(response);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })

)};

export default Avisos;