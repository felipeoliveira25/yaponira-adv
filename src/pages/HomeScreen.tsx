import {VStack, Text} from 'native-base'
import { Header } from '../components/Header'
import { BarraQtd } from '../components/BarraQtd'
import { BoxProcessos } from '../components/BoxProcessos'
import { BotaoNewClient } from '../components/BotaoNewClient'

export default function HomeScreen({navigation} : {navigation: any}){
    return(
        <VStack flex={1} >
            <Header/>
            <VStack w="100%" alignItems='center'>
                <BarraQtd/>
                <BoxProcessos/>
                <BotaoNewClient onPress={() => navigation.navigate('CadastroInfo')} mt={5} ml='170px'/>
            </VStack>
            
        </VStack>
    )
}