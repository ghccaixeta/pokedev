import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE_500};
    padding-top: 24px;
`