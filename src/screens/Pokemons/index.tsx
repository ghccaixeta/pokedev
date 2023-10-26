import { Header } from "@components/Header";
import { Container } from "./styles";
import { Description } from "@components/Description";
import { api } from "@services/api";


export function Pokemons() {

    async function fetchPokemons() {
        const response = await api.get('/pokemons?limit=20');

        console.log(response);
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