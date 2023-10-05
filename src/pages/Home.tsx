import {Container, Button} from '@mui/material'
import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons.hook";

const Home = () => {
    const {pokemons, fetchNextPage, hasMorePage} = usePokemons()

    return (
        <Container>
            {hasMorePage && (
                <Button sx={{margin: 5}} variant='contained' onClick={fetchNextPage}>See More...</Button>
            )}
            <PokemonList pokemons={pokemons} />
        </Container>
    )
};

export default Home;