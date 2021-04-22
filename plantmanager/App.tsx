// MUITO IMPORTANTE
import React from 'react';
import { Welcome } from './src/Welcome';
import {useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';


export default function app(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  if(!fontsLoaded){
    return( <AppLoading />
    )
  }

  return (
      <Welcome/>

  )
}