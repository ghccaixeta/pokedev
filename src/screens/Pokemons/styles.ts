import { SafeAreaView } from "react-native";
import styled from "styled-components/native";


export const Body = styled.View`

    width: 100%;
    height: 100%;


    background-color: ${({ theme }) => theme.COLORS.WHITE};
    
    flex-direction: column;
    
    padding: 0px 20px;

`

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE_500};
    padding-top: 24px;
`