import React from 'react';
import {View,Text} from 'react-native';

/* justifyContent eixo principal e alighItens eixo secundario ou transversal
    flexDirection: vai decidir qual o sentido que justify e aligh vão seguir
    justifyContent: de cima pra baixo flex-start, center, flex-end, space-around, space-between e space-evenly.
    alignItem: direita pra esquerda flex-start, center, flex-end e stretch.

*/
 export default function(props){
    return(
        <View style={{width:'100%',height:300,flexDirection:'row',flexWrap:'wrap'}}>
            <View style={{width:'100%',height:50,backgroundColor:'#00f',justifyContent:'flex-start',alignItems:'center'}}></View>
            <View style={{width:'100%',height:50,backgroundColor:'#00a'}}></View>
            <View style={{width:'100%',height:50,backgroundColor:'#005'}}></View>
            <View style={{width:'100%',height:50,backgroundColor:'#f00'}}></View>
            <View style={{width:'100%',height:50,backgroundColor:'#a00'}}></View>
            <View style={{width:'100%',height:50,backgroundColor:'#500 '}}></View>
        </View>
    )
}