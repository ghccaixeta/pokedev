import { Header } from "@components/Header";
import { Body, Container } from "./styles";
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
    const [previous, setPrevious] = useState<string>('');
    const [next, setNext] = useState<string>('');
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    async function fetchPokemons(offset: string | null) {
        try {
            const response = await api.get('/pokemon', { params: { offset ,limit: 20 } });
            setPokemons(response.data.results)
            setPrevious(response.data.previous)
            setNext(response.data.next)
        } catch (error) {
            return Alert.alert("Oops!", "Ocorreu um erro. Tente novamente mais tarde.")
        } finally {
            setIsLoading(false);
        }
    }

    function handleOpenPokemonDetails(url: string) {
        navigation.navigate('details', { url })
    }

    function setNextPage() {
        var params = next.split('?')[1]
        var offsetParam = params.split('&')
        var offset = offsetParam[0].match(/\d+/)?.toString() ?? '0'

        fetchPokemons(offset)

        
        
    }

    useFocusEffect(useCallback(() => {
        fetchPokemons(null);
    }, []))

    return (
        <Container>

            <Header title="Pokedev" />
            <Description title="Lista de Pokémons" />
            <Body>
                <FlatList
                    data={pokemons}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => <PokemonCard title={item.name} onPress={() => handleOpenPokemonDetails(item.url)} />}
                    contentContainerStyle={pokemons.length === 0 && { flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    onEndReached={setNextPage}
                />
            </Body>
        </Container>

    )
}