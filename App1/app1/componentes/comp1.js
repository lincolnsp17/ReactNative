import React from 'react';
import {Text,StyleSheet, View} from 'react-native';
import estilos from '../Estilos/estilos.js'

export default function(props){
    return(

        <Text style={estilos.textoCursos}>Lincoln Ferreira de Jesus - aula de {props.curso}, nota:{props.nota}</Text>

    )
}


        