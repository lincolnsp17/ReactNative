import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import wateringImg from './assetsload/watering.png';
import colors from '../styles/colors';
import { Button } from './components/button';

export function Welcome(){
    const {visible, setVisible} = useState(false);

    function handleVisibility(){
        setVisible(false);
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                 suas plantas {'\n'}
                 de forma fácil
            </Text>

            <Image source={wateringImg} style={styles.image}/>
            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas platnas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
        <Button title ="Mostrar imagem" onPress={}/>
        <Button title ="Ocultar imagem"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    title: {
        fontSize: 32, 
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop:38
    },
    subtitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        color: colors.heading
    },

    image: {
        width: 292,
        height: 294,
    },

})