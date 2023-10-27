import { Header } from "@components/Header";
import { Container } from "./styles";
import { Description } from "@components/Description";
import { api } from "@services/api";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ActivityIndicator, Alert, FlatList } from "react-native";
import { PokemonCard } from "@components/PokemonCard";
import { PokemonDTO } from "src/dtos/PokemonDTO";


export function Pokemons() {

    const [isLoading, setIsLoading] = useState(true);

    const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);

    async function fetchPokemons() {
        try {
            const response = await api.get('/pokemon', { params: { limit: 20 } });
            setPokemons(response.data.results)
        } catch (error) {
            return Alert.alert("Oops!", "Ocorreu um erro. Tente novamente mais tarde.")
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchPokemons();
    }, []))

    return (
        <Container>
            <Header title="Pokedev" />
            <Description title="Lista de Pokémons" />
            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <PokemonCard title={item.name} />}
                contentContainerStyle={pokemons.length === 0 && { flex: 1 }}
                // ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
            />
        </Container>
    )
}