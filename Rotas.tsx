import React from "react";
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();

import Login from "./src/pages/Login";
import HomeScreen from "./src/pages/HomeScreen";
import CadastroInfo from "./src/pages/CadastroInfo";



export default function Rotas(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Login">
                <Tab.Screen
                    name="Login" component={Login} options={{headerShown:false}}
                />
                     <Tab.Screen
                    name="Home" component={HomeScreen} options={{headerShown:false}}
                />
                 <Tab.Screen
                    name="CadastroInfo" component={CadastroInfo} options={{headerShown:false}}
                />
               
            </Tab.Navigator>
        </NavigationContainer>
    )
}