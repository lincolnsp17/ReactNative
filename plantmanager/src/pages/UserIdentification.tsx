import React, { useState } from 'react';
import { View } from 'react-native';
import {StyleSheet, SafeAreaView, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {Button} from '../components/button';
import { useNavigation } from '@react-navigation/core';


export function UserIdentification(){

    const navigation = useNavigation();

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    
    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name)
    }
    
    function handleInputFocus(){
        setIsFocused(true);
    }
    
    function handleInputChange(value: string){
        setIsFilled( !!value);
        setName(value);
    }


    function handleSubmit(){
        navigation.navigate('Confirmation')
    }

    return(
        <SafeAreaView style={styles.container}>
            
                <View style = {styles.content}>
                    <View style = {styles.form}>
                        <Text style = {styles.emoji}>
                            { isFilled ? '😉' : '😃' }
                        </Text>
                        <Text style={ styles.title}>
                            Como podemos {'\n'}
                            Chamar você ?
                        </Text>
                        <TextInput style={[styles.input,
                                   (isFocused || isFocused) && {borderColor: colors.green}]
                        } placeholder="Digite um nome" onBlur={handleInputBlur} onFocus={handleInputFocus} onChangeText={handleInputChange} />              
                            <View style={styles.footer}>
                                <Button title="Confirmar" onPress={handleSubmit}/>
                            </View>
                        </View>
                    </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%'
    }, 
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
        width: '100%',
    },
    emoji: {
        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20,
    }

})