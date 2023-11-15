import { PokemonDTO } from "src/dtos/PokemonDTO";
import { Container, Title, ListOfAbilities } from "./styles";
import { useEffect, useState } from "react";

type Props = {
    pokemon: PokemonDTO
}

export function Moviments({ pokemon }: Props) {

    const [moviments, setMoviments] = useState<string>();

    function getMoviments() {
        // const abilityNames = pokemon.abilities?.map(item => item.ability.name);
        // const concatenatedString = abilityNames?.join(' | ');
        // setAbilities(concatenatedString);

        console.log(pokemon.moves[2].move.name)

    }

    useEffect(() => {
        getMoviments();
    }, [pokemon.id])

    return (
        <Container>
            <Title>Movimentos:</Title>
            {/* <ListOfAbilities>{abilities}</ListOfAbilities> */}
        </Container>
    )

} 