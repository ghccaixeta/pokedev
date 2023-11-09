import styled from "styled-components/native";

export const Container = styled.View`

    width: 100%;
    /* height: 100%; */


    background-color: ${({ theme }) => theme.COLORS.WHITE};
    
    flex-direction: row;
    
    padding: 30px 0px 30px 20px;

`

export const ImageContainer = styled.View`

    width: 96px;
    height: 96px;

    border: solid 1px ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;

`

export const Avatar = styled.Image`
    width: 96px;
    height: 96px;
`

export const TitleContainer = styled.View`

    width: 100%;
    height: 96px;


    flex-direction: column;

    padding: 5px 15px;

    /* flex-direction: row;
    align-items: center;

    margin-bottom: 16px; */
    /* padding: 20px; */

`

export const Title = styled.Text`

    color: ${({theme}) => theme.COLORS.GRAY_500};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

`

export const PokemonName = styled.Text`
    color: ${({theme}) => theme.COLORS.BLACK};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`