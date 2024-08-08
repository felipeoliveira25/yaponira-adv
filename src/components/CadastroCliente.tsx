import { VStack, Text, Box, Button, Icon  } from "native-base";
import Icone from 'react-native-vector-icons/Feather'
import { FaixaTipoCadast } from "./FaixaTipoCadast";
import { InputCadastroCliente } from "./InputCadastroCliente";
import { TEMAS } from "../styles/temas";


export function CadastroCliente(){
    const iconReturn = <Icone name="chevron-right" size={200} />
    const iconCheck = <Icone name="check" size={200} />
    return(
        
            <VStack alignItems='center'>
            <FaixaTipoCadast>Cadastro dos clientes</FaixaTipoCadast>
            
            <Box mt={8} w='100%' alignItems='center' justifyContent='center'>
                <InputCadastroCliente tipo="text" label="Nome" placeholder="Yaponira" />
                <InputCadastroCliente tipo="text" label="Gênero" placeholder="Masculino" />
                <InputCadastroCliente tipo="text" label="Estado civil" placeholder="solteiro" />
                <InputCadastroCliente tipo="text" label="CPF" placeholder="000.000.000-00" />
                <InputCadastroCliente tipo="text" label="RG" placeholder="**********" />
                <InputCadastroCliente tipo="text" label="CNPJ" placeholder="" />
                <InputCadastroCliente tipo="text" label="Naturalidade" placeholder="brasileiro" />
                <InputCadastroCliente tipo="text" label="E-mail" placeholder="exemplo@gmail.com" />
                <InputCadastroCliente tipo="text" label="Contato" placeholder="()9****-****" />
                <InputCadastroCliente tipo="text" label="Data de Nascimento" placeholder="08/03/2005" />
                <InputCadastroCliente tipo="text" label="Profissão" placeholder="Designer" />
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