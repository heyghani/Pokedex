import {Container} from '@mui/material'
import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons.hooks";

const Home = () => {
    const {pokemons} = usePokemons()

    return (
        <Container>
            <PokemonList pokemons={pokemons} />
        </Container>
    )
};

export default Home;