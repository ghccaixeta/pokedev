import { Description } from "@components/Description";
import { Header } from "@components/Header";
import { Container } from "./styles";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { api } from "@services/api";
import { Alert } from "react-native";
import { PokemonDTO } from "src/dtos/PokemonDTO";
import { DetailHeader } from "@components/DetailHeader";

type RouteParamsProps = {
    url: string;
}

export function Details() {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonDTO>({} as PokemonDTO);

    const route = useRoute();

    const { url } = route.params as RouteParamsProps

    async function fetchPokemonDetails() {
        try {
            
            const response = await api.get(url);
            
            setPokemon(response.data);
                      

        } catch (error) {
            return Alert.alert("Oops!", "Ocorreu um erro. Tente novamente mais tardes.")
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemonDetails();
    }, [pokemon.id])

    return (
        <Container>
            <Header title="Pokedev" />
            <Description title="Detalhes do Pokémon" />
            <DetailHeader url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} title="Nome:" name={pokemon.name}  />
            
        </Container>
    )
}
