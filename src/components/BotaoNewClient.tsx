import { Button, IButtonProps, Text, Icon, Box } from "native-base";
import { ReactNode } from "react";
import { TEMAS } from "../styles/temas";
import Icone from 'react-native-vector-icons/Feather'

interface ButtonProps extends IButtonProps {
   
    color?: string
}

export function BotaoNewClient({ color, ...rest }: ButtonProps){
    const iconAdd = <Icone name='plus-circle' size={30}/>
    return(
        <Button
            w='40%'
            borderRadius="5px" 
            p={1} 
            backgroundColor={TEMAS.colors.blue} 
            {...rest}
            >
                <Box width='100%' alignItems='center' flexDirection='row' justifyContent='space-around'>
                    <Text color='#fff'>Novo cliente</Text>
                    <Icon as={iconAdd} ml={5} color='#fff'/>
                </Box>
                

        </Button>
    )
}