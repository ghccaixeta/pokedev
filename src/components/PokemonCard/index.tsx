import { TouchableOpacityProps, View } from 'react-native';
import { Container, ForwardIcon, Title } from './styles'
import { ItemSeparator } from '@components/ItemSeparator';

//Com o TouchableOpacityProps conseguimos utilizar as propiedades de um botão
type Props = TouchableOpacityProps & {

    title: string;

}

export function PokemonCard({ title, ...rest }: Props) {
    return (
        <>
            <Container {...rest}>
                
                <Title>
                    {title}
                </Title>

                <ForwardIcon></ForwardIcon>

                

            </Container>
            <ItemSeparator/>
        </>
    )
}