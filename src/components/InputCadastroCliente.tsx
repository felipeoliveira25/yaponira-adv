import { Box, Input, Text } from "native-base";

interface InputProps{
    label: string,
    placeholder:string,
    tipo: 'text' | 'password'
}

export function InputCadastroCliente({label, tipo, placeholder, ...rest}:InputProps){
    return(
        <Box w='90%' mb={10}>
            <Text mb={3} ml={1}>{label} *</Text>
            <Input p={3} type={tipo} {...rest} fontSize='sm' placeholder={placeholder}/>
        </Box>
    )
}