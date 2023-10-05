import { Container, Button, Grid } from "@mui/material";
import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons.hook";
import { IndexedType } from "../interfaces/pokemon.interface";

const Home = () => {
  const {
    pokemons,
    fetchNextPage,
    hasMorePage,
    pokemonTypes,
    setSelectedType,
    setPokemons,
  } = usePokemons();

  const handleSelectType = (type: IndexedType | null) => {
    if (type) {
      setSelectedType(type);
    } else {
      setPokemons([]);
      setSelectedType(null);
    }
  };
  return (
    <Container>
      <Grid container spacing={2} mt={1}>
        <Grid
          container
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {pokemonTypes.map((type) => (
            <Button
              data-testid={`btn-${type.name}`}
              key={type.name}
              variant="contained"
              sx={{
                "&.MuiButton-contained": {
                  background: type.color,
                },
                m: 1,
              }}
              onClick={() => handleSelectType(type)}
            >
              {type.name}
            </Button>
          ))}
          <Button
            variant="contained"
            sx={{
              m: 1,
            }}
            onClick={() => handleSelectType(null)}
          >
            ALL
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
         
          {hasMorePage && (
            <Button
              data-testid='btn-see-more'
              sx={{ margin: 5 }}
              variant="contained"
              onClick={fetchNextPage}
            >
              See More...
            </Button>
          )}
          <PokemonList pokemons={pokemons} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
