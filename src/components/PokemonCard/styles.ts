import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
// import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`

    width: 100%;
    height: 70px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0px;
    
    

    flex-direction: row;
    align-items: center;

    padding: 14px;

`

export const Title = styled.Text`

${({ theme }) => css`
font-size: ${theme.FONT_SIZE.MD}px;
color: ${theme.COLORS.BLACK};
font-family: ${theme.FONT_FAMILY.REGULAR};

`}

`

// export const Icon = styled(UsersThree).attrs(({ theme }) =>({
//     size: 32,
//     color: theme.COLORS.GREEN_700,
//     weight: 'fill'

// }))`

//     margin-right: 20px;

// `