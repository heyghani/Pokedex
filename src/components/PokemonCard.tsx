import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
  CardMedia,
} from "@mui/material";
import { ListPokemon } from "../interfaces/pokemon.interface";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemon: ListPokemon;
}
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Card>
      <CardActionArea>
        <Link
          to={`pokemon/${pokemon.name}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardMedia
            component="img"
            image={pokemon.image}
            title={pokemon.name}
            sx={{ height: 100, objectFit: "contain" }}
          />
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography sx={{ textTransform: "capitalize" }}>
                {pokemon.name}
              </Typography>
            </Box>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
