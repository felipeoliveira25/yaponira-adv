import {Box, Text, Icon} from 'native-base'
import { TEMAS } from "../styles/temas"
import {PieChart} from 'react-native-svg-charts'
import { Botao } from './Botao';
import Icone from 'react-native-vector-icons/Feather'


export function BoxProcessos(){
    const iconSquare = <Icone name='square' size={30}/>
    const data = [
        {
            key:'Em andamento',
            amount:30,
            svg:{fill: '#FECE5F'}
        },
        {
            key:'Não iniciados',
            amount:10,
            svg:{fill: '#FC694D'}
        },
        {
            key:'Concluídos',
            amount:20,
            svg:{fill: '#57FF68'}
        }
    ];
    const pieData = data.map((item) => ({
        value: item.amount,
        svg: item.svg,
        key: item.key
       
    }))
    
    return(
        <Box width='90%'  alignItems="center" justifyContent="center" mt="35px" borderRadius='7px' borderWidth={2} borderColor="#CACACA">
            <Text mt="40px" fontFamily={TEMAS.fonts.text} fontSize="lg">Processos</Text>
            <PieChart style={{height: 200, width:150}} innerRadius={60} data={pieData} ></PieChart>
            <Box position='absolute' alignItems='center' top='130px' >
                <Text fontSize='3xl'>45</Text>
                <Text>Total</Text>
            </Box>
            <Box alignItems='start'>
                <Box flexDirection='row' alignItems='center' justifyContent='center' mb={1}>
                    <Icon as={iconSquare} bgColor='#FC694D' color='#FC694D' mr={2}/>
                    <Text color='#717171'>Não iniciados: 10</Text>
                </Box>
                <Box flexDirection='row'  alignItems='center' justifyContent='center' mb={1}>
                    <Icon as={iconSquare} bgColor={TEMAS.colors.golden} mr={2}  color={TEMAS.colors.golden}/>
                    <Text color='#717171'>Em andamento: 15</Text>
                </Box>
                <Box flexDirection='row'  alignItems='center' justifyContent='center'>
                    <Icon as={iconSquare} bgColor='#57FF68' mr={2} color='#57FF68'/>
                    <Text color='#717171'>Concluídos: 20</Text>
                </Box>
                
            </Box>
            <Botao mt='50px' mb='60px'>Ver processos</Botao>
        </Box>
    )
}