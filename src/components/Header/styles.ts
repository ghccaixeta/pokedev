import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 0px 20px;

`;

export const Text = styled.Text`
    flex: 1;
    text-align: center;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

`

export const BackButton = styled.TouchableOpacity`
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme })=>({
    size: 36,
    color: theme.COLORS.WHITE,
    weight: "bold",
}))`
    max-width: 24px;
    
`