// MUITO IMPORTANTE
import React from 'react';
import { Welcome } from './src/pages/Welcome';
import {useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { Confirmation } from './src/pages/Confirmation';


export default function app(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });
  if(!fontsLoaded){
    return( <AppLoading />
    )
  }

  return (
      <Confirmation/>

  )
}