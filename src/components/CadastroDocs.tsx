import { VStack, Text, Icon, Box, Button } from "native-base";
import { FaixaTipoCadast } from "./FaixaTipoCadast";
import Icone from 'react-native-vector-icons/Feather'
import { TEMAS } from "../styles/temas";
import { InputCadastroDoc } from "./InputCadastroDoc";


export function CadastroDocs(){
    const iconReturn = <Icone name="chevron-right" size={200} />
    const iconCheck = <Icone name="check" size={200} />

    return(
        <VStack alignItems='center' w="100%">
            <FaixaTipoCadast>Documentos Pessoais</FaixaTipoCadast>

            <Box w="100%" pb={10} alignItems="center" borderBottomWidth={1} borderBottomColor="#BBB9B9">
                <Box w="90%" mb={8} mt={10}>
                    <Text fontSize="lg">Documentos do cliente</Text>
                </Box>
                
                <InputCadastroDoc label="CPF"/>
                <InputCadastroDoc label="RG"/>
            </Box>

            <Box w="100%" pb={10} alignItems="center" >
                <Box w="90%" mb={8} mt={10}>
                    <Text fontSize="lg">Documentos de terceiros</Text>
                </Box>
                
                <InputCadastroDoc label="CPF"/>
                <InputCadastroDoc label="RG"/>
            </Box>

            <Button  backgroundColor='transparent' w='100%' justifyContent='flex-end' pr={6}>
                    <Box flexDirection='row' ml={3} mt={3} mb={5} alignItems='center' >
                        <Text mb={1} mr={2}>Próximo</Text>
                        <Icon  as={iconReturn}   />
                        
                    </Box>
            </Button>
            <Button w='70%' mb={8} bgColor={TEMAS.colors.blue} borderRadius={5}>
                <Box flexDirection='row' alignItems='center'>
                    <Icon as={iconCheck} mr={2} color='#fff'/>
                    <Text color='#fff'>Salvar</Text>
                </Box>
            </Button>
        </VStack>
        
    )
}