import {Card, CardContent, Box, Typography} from '@mui/material'
import { IndexedPokemon } from "../interfaces/pokemon.interface"

interface PokemonCardProps {
    pokemon: IndexedPokemon
}
const PokemonCard = ({pokemon}: PokemonCardProps) => {
  return (
    <Card>
        <CardContent>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography>{pokemon.name}</Typography>
            </Box>
        </CardContent>
    </Card>
  )
}

export default PokemonCard