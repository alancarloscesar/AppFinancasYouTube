import React from 'react';
import { View,Text, FlatList} from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

import { LastMoviments, Container } from './styles';

const list =  [
  {
    id: 1,
    label: 'Boleto Luz',
    value: '157,00',
    date: '17/04/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '17/05/2022',
    type: 1 // receita / entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '2.557,00',
    date: '17/04/2022',
    type: 1 
  },
  {
    id: 4,
    label: 'Conta de Água',
    value: '85,00',
    date: '22/05/2022',
    type: 0 
  },
  {
    id: 5,
    label: 'Galosina',
    value: '50,00',
    date: '17/05/2022',
    type: 0 
  },
]

export default function Home() {
 return (
   <Container>
       <Header name='Alan Cesar' />
       
       <Balance saldo='15.000,00' gastos='-659,00'/>

       <Actions/>
       
       <LastMoviments>Últimas Movimentações</LastMoviments>

       <FlatList
       data={list}
       keyExtractor={(item) => String(item.id)}//convertendo o id em string
       showsVerticalScrollIndicator={false}
       renderItem={({item}) => <Movements data={item}/>}       />

       

   </Container>
  );
}