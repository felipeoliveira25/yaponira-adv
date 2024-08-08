import { VStack, Image, Box, Center, Text, Alert, Modal, Input, Icon, Pressable, FormControl, Button, Link } from "native-base";
import Logo from '../assets/logo-login.png'
import { ImageBackground, StyleSheet,  } from "react-native";
import { TEMAS } from "../styles/temas";
import Icone from 'react-native-vector-icons/Feather'
import React from "react";
import { Botao } from "../components/Botao";
import { CommonActions } from "@react-navigation/native";






export default function Login({navigation} : {navigation: any}) {
  const iconUser = <Icone name="user" size={30} color={TEMAS.colors.blue}/>
  const iconKey = <Icone name="key" size={30} color={TEMAS.colors.blue}/>
  const iconVisibility = <Icone name="eye" size={30} color={TEMAS.colors.blue}/>
  const iconVisibilityOff = <Icone name="eye-off" size={30} color={TEMAS.colors.blue}/>

  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [show, setShow] = React.useState(false)
  const [error, setError] = React.useState(false)

  
  const handleLogin = () => {
    //  if(user === '1' && password === '1'){
    //    navigation.navigate("Home")
    //  }else{
    //    setError(true)
    //  }
    navigation.dispatch(
      CommonActions.reset({
        index:0,
        routes:[{name:"Home"}]
      })
    )
    setUser('')
    setPassword('')
    
   
  }
  return (
    <ImageBackground
        source={require('../assets/foto-fundo-login.png')}
        style={styles.backgroundImage}>
                
           <Modal isOpen={error}  onClose={() => setError(false)}>
            <Modal.Content  bgColor='#FECACA' maxWidth="400px" >
             
              <Modal.Body >
              <Modal.CloseButton mt={3}/>
                <Alert status="error"  width='100%'>
                  <Text bold fontSize={15}>Usuário ou senha inválidos!</Text>
                </Alert>
              </Modal.Body>
            </Modal.Content>
          </Modal>
         <VStack flex={1}  alignItems="center" p={5} bgColor="rgba(17, 34, 50, 0.9)"  >
           <Image marginTop={24} source={Logo} alt="Logo Voll"/>
           <Box alignItems="center"  borderColor={TEMAS.colors.white} justifyContent="center" width="90%" bgColor="rgba(183, 183, 183, 0.7)" marginTop={24} borderRadius="8px" pt={10} pb={10}>
            
            <Text bold color={TEMAS.colors.white} fontSize="2xl" marginBottom={10}>Entrar</Text>
            <FormControl width="80%">
              <Input 
                p={3} 
                type="text" 
                value={user}
                onChangeText={(text) => setUser(text)}
                pl={2} 
                backgroundColor="#E9E9E9" 
                marginBottom={5} 
                variant="rounded" 
                placeholder="Usuário"  
                InputLeftElement={<Icon ml={2} as={iconUser} />} />
            </FormControl>
            <FormControl width="80%">
              <Input 
                  p={3} 
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  type={show ? "text" : "password"}  
                  backgroundColor="#E9E9E9" 
                  variant="rounded" 
                  placeholder="Senha" 
                   
                  InputRightElement={<Pressable onPress={() => setShow(!show)}>
                      <Icon mr={2} as={show ? iconVisibility : iconVisibilityOff}/>
                  </Pressable>}
                  InputLeftElement={<Icon ml={2} as={iconKey} />}
                />
            </FormControl>
              
            <Box width="70%" alignItems="flex-end" mt={3}>
              <Link  isUnderlined={false} _text={{color:"#BDBDBD"}} >Esqueceu a senha?</Link>
            </Box>
           </Box>
           <Botao onPress={handleLogin} mt={12}>Entrar</Botao>
        </VStack>

    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover'
  }
})


