import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { MotiView, MotiText } from 'moti';

import {Feather} from '@expo/vector-icons';

import {AreaUser, UserText, TouchUser} from './styles'

export const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
//se estiver no android aplica o padding de 22 se for no ios aplica padding de 64
//tem que colocar a variavel no styles

export default function Header({name}) {
 return (
   <View style={styles.container}>
     <MotiView
     from={{
      translateY: -150,
      opacity: 0,
    }}
    animate={{
      translateY: 0,
      opacity: 1,
    }}
    transition={{
      type: 'timing',
      duration: 800,
      delay: 300,
    }}
     >
       <AreaUser>
          <UserText>{name}</UserText>
          <TouchUser>
            <Feather name='user' color='#fff' size={27}/>
          </TouchUser>
       </AreaUser>
     </MotiView>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: statusBarHeight,
        backgroundColor: '#8000ff',
        height: '20%',
        paddingLeft: 16,
          paddingRight:16,
      }
  })
