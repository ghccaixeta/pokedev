import { Header } from "@components/Header";
import { Container } from "./styles";
import { Description } from "@components/Description";
import { api } from "@services/api";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";


export function Pokemons() {

    const [isLoading, setIsLoading] = useState(true);

    async function fetchPokemons() {
        try {
            const response = await api.get('/pokemon',{params: {limit: 20}});
        } catch (error) {
            return Alert.alert("Oops!","Ocorreu um erro. Tente novamente mais tarde.")
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() =>{
        fetchPokemons();
    }, []))

    return(
        <Container>
            <Header title="Pokedev" />
            <Description title="Lista de Pokémons" />
        </Container>
    )
}