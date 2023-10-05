import {Grid} from '@mui/material'
import { IndexedPokemon } from '../interfaces/pokemon.interface'
import PokemonCard from './PokemonCard';

interface PokemonListProps {
    pokemons: IndexedPokemon[];
}

const PokemonList = ({pokemons}: PokemonListProps) => {
  return (
    <Grid container spacing={2}>
        {
            pokemons.length > 0 && pokemons.map((item) => {
                return (
                    <Grid item xs={4}>
                        <PokemonCard key={item.name} pokemon={item} />
                    </Grid>
                )
            })
        }
    </Grid>
  )
}

export default PokemonList