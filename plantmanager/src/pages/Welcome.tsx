import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Platform, Dimensions, } from 'react-native';
import wateringImg from './assetsload/watering.png';
import {Feather} from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { processFontFamily } from 'expo-font';

export function Welcome(){

// o "visible &&" é a condição que se estiver true, a imagem vai aparecer
// em Safe vc não consegue utilizar padding 

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                     suas plantas de{'\n'}
                    forma fácil
                </Text>

                <Image source={wateringImg} style={styles.image} resizeMode="contain"/>
            
                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. Nós
                     cuidamos de lembrar você sempre
                      que precisar.
                </Text>
                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Feather name="chevron-right" style={styles.buttonIcon}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    wrapper: {
        flex:1,
        alignItems:"center",
        justifyContent: 'space-around',
        paddingHorizontal:20,
    },
    title: {
        fontSize: 32, 
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop:38,
        fontFamily: fonts.heading,
        lineHeight: 38,
    },
    subtitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        color: colors.heading,
        fontFamily: fonts.text,
    },

    image: {
        height: Dimensions.get('window').width * 0.7
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

    buttonIcon: {
        color: colors.white,
        fontSize:24,
    },

})


    /*
    const [visible, setVisible] = useState(false);

    function handleVisibility(){
        setVisible(true);
    }

    function handleInvisibility(){
        setVisible(false);
    }
    */
