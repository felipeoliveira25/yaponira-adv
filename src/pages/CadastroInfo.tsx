import { VStack, Text, Box,Button, Icon, ScrollView } from "native-base";
import { Header } from "../components/Header";
import { BarraTipoCadast  } from "../components/BarraTipoCadast";
import Icone from 'react-native-vector-icons/Feather'
import { TEMAS } from "../styles/temas";
import React from "react";
import { FaixaTipoCadast } from "../components/FaixaTipoCadast";
import { CadastroCliente } from "../components/CadastroCliente";
import { CadastroDocs } from "../components/CadastroDocs";
import { CadastroAtendimento } from "../components/CadastroAtendimento";

export default function CadastroInfo({navigation} : {navigation: any}){
    const [content, setContent] = React.useState('info')
    const iconReturn = <Icone name="chevron-left" size={200} color={TEMAS.colors.blue}/>

    const renderContent = () => {
        switch (content) {
          case 'info':
            return <CadastroCliente/>
          case 'doc':
            return <CadastroDocs/>
          case 'atend':
            return <CadastroAtendimento/>
        }
      };
    return(
        <VStack>
          <ScrollView>
            <Header/>
            <VStack w='100%' alignItems='center'>
                <Button onPress={()=> navigation.goBack()} backgroundColor='transparent' w='100%' justifyContent='flex-start'>
                    <Box  flexDirection='row'  ml={3} mt={3} mb={5} alignItems='center' >
                        <Icon  as={iconReturn} mr={1}  />
                        <Text>Voltar</Text>
                    </Box>
                </Button>
                
                <BarraTipoCadast setContent={setContent} />

                <Box w='100%'>
                    {renderContent()}
                </Box>
            </VStack>
          </ScrollView>
        </VStack>
    )
}