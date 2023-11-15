import { PokemonDTO } from "src/dtos/PokemonDTO";
import { Container, Title, ListOfAbilities } from "./styles";
import { useEffect, useState } from "react";

type Props = {
    pokemon: PokemonDTO
}

export function Abilities({ pokemon }: Props) {

    const [abilities, setAbilities] = useState<string>();

    function getAbilities() {
        const abilityNames = pokemon.abilities?.map(item => item.ability.name);
        const concatenatedString = abilityNames?.join(' | ');
        setAbilities(concatenatedString);

    }

    useEffect(() => {
        getAbilities();
    }, [pokemon.id])

    return (
        <Container>
            <Title>Habilidades:</Title>
            <ListOfAbilities>{abilities}</ListOfAbilities>
        </Container>
    )

} 