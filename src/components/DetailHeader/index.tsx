import { Container, ImageContainer, PokemonName, Title, TitleContainer, Avatar } from "./styles"

type Props = {
    url: string
    title: string,
    name: string,
}

export function DetailHeader({ url, title, name, ...rest }: Props) {
    return (
        <Container>
            <ImageContainer>
                <Avatar source={{uri: url}}/>
            </ImageContainer>
            <TitleContainer>
                <Title>{title}</Title>
                <PokemonName>{name}</PokemonName>
            </TitleContainer>
        </Container>
    )
}