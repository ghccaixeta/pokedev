import styled from "styled-components/native";

export const Container = styled.View`

    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

`;

export const Text = styled.Text`

    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

`