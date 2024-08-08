import { HStack, Image, Avatar } from "native-base";
import { TEMAS } from "../styles/temas";
import Logo from '../assets/logo-login.png'
import Perfil from '../assets/img-perfil.jpg'



export function Header(){
    return(
        <HStack safeAreaTop h={130} alignItems="center" justifyContent='space-around' mt={0} bg={TEMAS.colors.blue}>
            <Image source={Logo} ml={150} w='35px' h='35px' alt="Logo Voll"/>
            <Avatar source={Perfil} ml={5} />
        </HStack>
    )
}