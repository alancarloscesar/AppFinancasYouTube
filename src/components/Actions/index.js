import React from 'react';
import { View, ScrollView } from 'react-native';

import {AntDesign} from '@expo/vector-icons';

import {

    AreaActionTouch,
    SubviewIcon,
    ActionText

} from './styles'

export default function Actions() {
 return (
   <ScrollView
   horizontal={true}
   showsHorizontalScrollIndicator={false}
   style={{marginTop: 30}}
   >
       <AreaActionTouch>
            <SubviewIcon>
                <AntDesign name='addfolder' size={27} color='#000' />
            </SubviewIcon>
            <ActionText>Entradas</ActionText>
       </AreaActionTouch>

       <AreaActionTouch>
            <SubviewIcon>
                <AntDesign name='tagso' size={27} color='#000' />
            </SubviewIcon>
            <ActionText>Compras</ActionText>
       </AreaActionTouch>

       <AreaActionTouch>
            <SubviewIcon>
                <AntDesign name='creditcard' size={27} color='#000' />
            </SubviewIcon>
            <ActionText>Carteira</ActionText>
       </AreaActionTouch>

       <AreaActionTouch>
            <SubviewIcon>
                <AntDesign name='barcode' size={27} color='#000' />
            </SubviewIcon>
            <ActionText>Boletos</ActionText>
       </AreaActionTouch>

       <AreaActionTouch>
            <SubviewIcon>
                <AntDesign name='setting' size={27} color='#000' />
            </SubviewIcon>
            <ActionText>Conta</ActionText>
       </AreaActionTouch>

   </ScrollView>



  );
}