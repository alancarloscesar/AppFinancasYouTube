import React from 'react';
import { View } from 'react-native';

import { MotiView } from 'moti';

import {
    Container,
    AreaSaldo,
    SaldoText,
    MoedaText, 
    ValorSaldoText,
    AreaSaldoConcat,
    ValorGastoText,
    AreaGastos
} from './styles';

export default function Balance({saldo, gastos}) {
 return (
 
 <MotiView
     from={{
        rotateX: '-100deg',
        opacity: 0,
       }}
       animate={{
        rotateX: '0deg',
        opacity: 1,
       }}
       transition={{
        type: 'timing',
        delay: 300,
        duration: 1000,
    }}
    >
   <Container>

            <AreaSaldo>
                    <SaldoText>Saldo</SaldoText>
                    <AreaSaldoConcat>
                        <MoedaText>R$</MoedaText>
                        <ValorSaldoText>{saldo}</ValorSaldoText>
                    </AreaSaldoConcat>
            </AreaSaldo>

            <AreaSaldo>
                    <SaldoText>Gastos</SaldoText>
                    <AreaSaldoConcat>
                        <MoedaText>R$</MoedaText>
                        <ValorGastoText>{gastos}</ValorGastoText>
                    </AreaSaldoConcat>
            </AreaSaldo>

   </Container>
</MotiView>
  );
}