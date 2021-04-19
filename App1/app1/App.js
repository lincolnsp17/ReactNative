import React from 'react';
import {Text,View} from 'react-native';
import estilos from './Estilos/estilos.js';
import Caixas from './componentes/caixas';


export default function App1(){
  let vexibir = true;
  return (
    <View style={estilos.conteiner}>
      <Caixas exibir={vexibir}/>
      <Text style={estilos.textoTitulo}>Gabarito</Text>
      {vexibir?<Text>Curso de React</Text>:<Text> -------- </Text>}
    </View>
  );
};






/*
function fexibir(vp1){
  if(vp1){
    return(<Text>Curso de React</Text>)
  }else{
    return(<Text> -------- </Text>)
  }
}

export default function App1(){
 
  return(
    <View style={estilos.conteiner}>
      <Caixas/>
      <Text style={estilos.textoTitulo}>Gabarito</Text>
      <Caixas/>
      {fexibir(false)}
    </View>
  )
}*/