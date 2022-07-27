import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
padding-left: 16px;
padding-right: 16px;
margin-top: 10px;
background-color: #fff;
margin-bottom: -6px;
`;

export const DateText = styled.Text`
font-size: 17px;
font-weight: bold;
color: #ccc;
padding-top: 15px;
padding-bottom: 10px;
`;

export const Moviments = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-bottom: 10px;
`;

export const MovimentsName = styled.Text`
font-weight: bold;
font-size: 20px;
`;

export const MovimentsValue = styled.Text`
color:#2ecc71;
font-weight: bold;
font-size: 18px;
`;

export const MovimentsValueGastos = styled.Text`
color:#e74c3c;
font-weight: bold;
font-size: 18px;
`;

export const ViewFalse = styled.View`
width: 35%;
height: 40%;
background-color: #dadada;
border-radius: 20px;
`;