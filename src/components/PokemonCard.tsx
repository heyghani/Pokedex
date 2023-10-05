import {Card, CardContent, Box, Typography, CardMedia} from '@mui/material'
import { ListPokemon } from "../interfaces/pokemon.interface"

interface PokemonCardProps {
    pokemon: ListPokemon
}
const PokemonCard = ({pokemon}: PokemonCardProps) => {
  return (
    <Card>
        <CardMedia
            component='img'
            image={pokemon.image}
            title={pokemon.name}
            sx={{height: 100, objectFit: 'contain'}}
        />
        <CardContent>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography sx={{textTransform: 'capitalize'}}>{pokemon.name}</Typography>
            </Box>
        </CardContent>
    </Card>
  )
}

export default PokemonCard