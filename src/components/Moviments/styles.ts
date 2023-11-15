import styled from "styled-components/native";

export const Container = styled.View`

    width: 100%;
    height: 100%;


    background-color: ${({ theme }) => theme.COLORS.WHITE};
    
    flex-direction: column;
    
    padding: 10px 0px 30px 20px;

`

export const Title = styled.Text`

    color: ${({theme}) => theme.COLORS.GRAY_500};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

`
export const ListOfAbilities = styled.Text`

    color: ${({theme}) => theme.COLORS.BLACK};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    margin-top: 5px;

`