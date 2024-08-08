
import { NativeBaseProvider, StatusBar, Button, Box } from 'native-base';
import { TEMAS } from './src/styles/temas';
import Rotas from './Rotas';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded ] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold
  })

  if(!fontsLoaded){
    <AppLoading/>
  }

  return (
    <NativeBaseProvider theme={TEMAS}>
      <Rotas/>
    </NativeBaseProvider>
    
  );
}


