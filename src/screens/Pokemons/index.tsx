import { Header } from "@components/Header";
import { Container } from "./styles";
import { Description } from "@components/Description";

export function Pokemons() {
    return(
        <Container>
            <Header title="Pokedev" />
            <Description title="Lista de Pokémons" />
        </Container>
    )
}