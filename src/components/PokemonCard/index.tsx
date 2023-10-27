import { TouchableOpacityProps } from 'react-native';
import {Container, Title} from './styles'

//Com o TouchableOpacityProps conseguimos utilizar as propiedades de um botão
type Props = TouchableOpacityProps & {

    title: string;

}

export function PokemonCard({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            {/* <Icon></Icon> */}
            <Title>
                {title}
            </Title>
        </Container>
    )
}