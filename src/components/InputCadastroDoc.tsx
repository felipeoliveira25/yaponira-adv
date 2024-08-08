import { Button, Text, Box, Icon } from "native-base";
import { Alert } from "react-native";
import Icone from 'react-native-vector-icons/Feather'
import React from "react";
import { TEMAS } from "../styles/temas";

interface DocProps{
    label: string,

}

export function InputCadastroDoc({label, ...rest}:DocProps){
    const iconClip = <Icone name="paperclip"  />
    return(
        <Box w="90%" mb={5}>
            <Text mb={3}>{label}</Text>
            <Button bgColor="#E6E6E6">
                <Box flexDirection="row" alignItems="center" w="100%" justifyContent="space-between">
                    <Text color="#BBB9B9">Carregar Documentos</Text>
                    <Icon as={iconClip} size={4}/>
                </Box>
            </Button>
        </Box>
    )
}