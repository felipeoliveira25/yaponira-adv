import { Box, Link } from "native-base";
import { TEMAS } from "../styles/temas";
import React from "react";

// interface BarraProps{
//     estaAtivo:boolean
// }

export function BarraTipoCadast({ setContent }: { setContent: (content: string) => void }){
    const [linkSelecionado, setLinkSelecionado] = React.useState('info')

    const handlePress = (link: string) => {
        setLinkSelecionado(link)
        setContent(link)
    }
   
    return(
        <Box w='100%'  borderColor={TEMAS.colors.gray} borderTopWidth={1} borderBottomWidth={1} flexDirection='row' alignItems='center' justifyContent='space-around'>
            <Link 
                isUnderlined={false} 
                
                _text={{color: linkSelecionado === 'info' ? '#000' : '#8C8C8C'}} 
                onPress={() => handlePress('info')}
            >
                Informações
            </Link>
            <Box borderLeftWidth={1} borderColor={TEMAS.colors.gray} pt={2} pb={2} pl={5} pr={5} h='100%' borderRightWidth={1}>
                <Link 
                    isUnderlined={false} 
                    _text={{color: linkSelecionado === 'doc' ? '#000' : '#8C8C8C'}} 
                    onPress={() => handlePress('doc')}
                >
                    Documentos
                </Link>
            </Box>
            <Link 
                isUnderlined={false} 
                _text={{color: linkSelecionado === 'atend' ? '#000' : '#8C8C8C'}} 
                onPress={() => handlePress('atend')}
                >
                    Atendimento
            </Link>
        </Box>
        
    )
}