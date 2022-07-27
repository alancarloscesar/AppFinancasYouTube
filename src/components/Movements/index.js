import React,{useState} from 'react';
import { View } from 'react-native';

import { MotiView, MotiText, AnimatePresence } from 'moti';

import {
Container,
DateText,
Moviments,
MovimentsName,
MovimentsValue,
MovimentsValueGastos,
ViewFalse

} from './styles'

export default function Movements({data}) {

    const [show, setShow] = useState(false);


 return (
   <Container onPress={() => setShow(!show)}>
       <DateText>{data.date}</DateText>
       <Moviments>
           <MovimentsName>{data.label}</MovimentsName>
            {
                show ? (
           
                   data.type === 0 ?
                   <MovimentsValueGastos>R$ {'-'+data.value}</MovimentsValueGastos>
                   :
                   <MovimentsValue>R$ {data.value}</MovimentsValue>
                
                ) : (
                    <ViewFalse></ViewFalse>
                )
            }
       </Moviments>
   </Container>
  );
}