import styled from "styled-components/native";

export const Container = styled.View`

    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 15px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};

`;

export const Text = styled.Text`

    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

`