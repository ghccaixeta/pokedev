import { Header } from "@components/Header";
import { Container } from "./styles";
import { Description } from "@components/Description";
import { api } from "@services/api";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ActivityIndicator, Alert, FlatList } from "react-native";
import { PokemonCard } from "@components/PokemonCard";
import { PokemonDTO } from "src/dtos/PokemonDTO";
import { AppNavigatorRoutesProps } from "src/routes/app.routes";



export function Pokemons() {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);
    const navigation = useNavigation<AppNavigatorRoutesProps>();

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

    function handleOpenPokemonDetails(url: string) {
        navigation.navigate('details',{url})
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
                renderItem={({ item }) => <PokemonCard title={item.name} onPress={() => handleOpenPokemonDetails(item.url)} />}
                contentContainerStyle={pokemons.length === 0 && { flex: 1 }}
                
            // ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
            />
        </Container>
    )
}