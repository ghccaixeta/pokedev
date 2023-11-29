import { CaretRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
// import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`

    width: 100%;
    height: 70px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-width: 0px 0px 1px 0px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};

`

export const Title = styled.Text`

${({ theme }) => css`
font-size: ${theme.FONT_SIZE.MD}px;
color: ${theme.COLORS.BLACK};
font-family: ${theme.FONT_FAMILY.REGULAR};

`}

`

export const ForwardIcon = styled(CaretRight).attrs(({ theme }) => ({
    size: 36,
    color: theme.COLORS.BLUE_700,
    weight: "bold",
}))`
    max-width: 24px;
    
`

// export const Icon = styled(UsersThree).attrs(({ theme }) =>({
//     size: 32,
//     color: theme.COLORS.GREEN_700,
//     weight: 'fill'

// }))`

//     margin-right: 20px;

// `