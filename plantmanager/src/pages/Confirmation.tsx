import React from 'react';
import{
    SafeAreaView,
    StatusBar,
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {Button} from '../components/button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😃    
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas
                    plantinhas com muito cuidado.    
                </Text>             

                <View style={styles.footer}>
                    <Button title="Começar"/>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles= StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',  
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 30,

    },
    title:{
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight:38,
        marginTop:15,
    },
    subtitle:{
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading,
        paddingBottom: 25,
    },
    emoji: {
        fontSize: 78,
    },
    footer: {
        width: '100%',
        paddingHorizontal:75,
        
    }
})