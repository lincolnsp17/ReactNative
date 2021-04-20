import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import wateringImg from './assetsload/watering.png';
import colors from '../styles/colors';

export function Welcome(){
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
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>
                        >
                </Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:10,
        height: 56,
        width:56,
    },
    image: {
        width: 292,
        height: 294,
    },
    buttonText: {
        color: colors.white,
        fontSize:24,
    }
})