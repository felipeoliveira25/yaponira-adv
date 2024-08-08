import { Box, Text } from "native-base";
import React, { ReactNode } from "react";
import { TEMAS } from "../styles/temas";

interface FaixaProps{
    children: ReactNode
}

export function FaixaTipoCadast({children}: FaixaProps){
    return(
        <Box w='95%' borderLeftWidth={4} borderLeftColor={TEMAS.colors.golden} borderRadius={4} p={3}  mt={5}  background={TEMAS.colors.blue}>
            <Text color={TEMAS.colors.white}>{children}</Text>
        </Box>
    )
}