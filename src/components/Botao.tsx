import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";
import { TEMAS } from "../styles/temas";

interface ButtonProps extends IButtonProps {
    children: ReactNode,
    color?: string
}

export function Botao({children, color, ...rest }: ButtonProps){
    return(
        <Button
            w='70%'
            borderRadius="20px" 
            p={3} 
            backgroundColor={TEMAS.colors.golden} 
            _text={{color:"#000"}}
            {...rest}
        >
            {children}
        </Button>
    )
}