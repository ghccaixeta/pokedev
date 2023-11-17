import { PokemonDTO } from "src/dtos/PokemonDTO";
import { Container, Title, ListOfAbilities } from "./styles";
import { useEffect, useState } from "react";
import { MoveDTO } from "src/dtos/MoveDTO";
import { MovesDTO } from "src/dtos/MovesDTO";
import { FlatList, Text } from "react-native";

type Props = {
    pokemon: PokemonDTO
}

export function Moviments({ pokemon }: Props) {

    const [moviments, setMoviments] = useState<MoveDTO[]>([]);

    function getMoviments() {
        const moviment = pokemon.moves?.map(item => item.move);
        setMoviments(moviment)
    }

    useEffect(() => {
        getMoviments();
    }, [pokemon.id])

    return (
        <Container>
            <Title>Movimentos:</Title>
            <FlatList
                data={moviments}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
                minH={10}
            />
        </Container>
    )

} 