import styled from "styled-components/native";

export const ItemSeparatorContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 0 14px;
    
    
`

export const Separator = styled.View`
    height: 1px;
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};;
`;