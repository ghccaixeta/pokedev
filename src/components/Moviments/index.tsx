import { PokemonDTO } from "src/dtos/PokemonDTO";
import { Container, Title, View, Moviment, Text } from "./styles";
import { useEffect, useState } from "react";
import { MoveDTO } from "src/dtos/MoveDTO";

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
            <View>
                {moviments?.slice(0, 4).map((item) => (
                    <View key={item.name}>
                        <Moviment>
                            <Text>{item.name}</Text>
                        </Moviment>
                    </View>
                ))}
                <Moviment>
                    <Text>...</Text>
                </Moviment>
            </View>
        </Container>
    )

}