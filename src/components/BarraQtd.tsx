import { Box, Text } from "native-base"
import { TEMAS } from "../styles/temas"

export function BarraQtd(){
    return(
        <Box w='80%' borderRadius='7px' borderWidth={2} mt={10} flexDirection='row' alignItems='center' justifyContent='center'>
            <Box bgColor={TEMAS.colors.blue}  pl='65px' pr='65px' pt={1} pb={1}>
                <Text fontFamily={TEMAS.fonts.text} color={TEMAS.colors.white}>Total</Text>
            </Box>
            <Box pl='65px' pr='65px' pt={1} pb={1}>
                <Text fontFamily={TEMAS.fonts.text}>45</Text>
            </Box>
        </Box>
    )
}