import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Grid, Box, Button } from "@mui/material";
import usePokemonDetail from "../hooks/usePokemonDetail.hook";
import PokemonAvatar from "./PokemonAvatar";
import PokemonBasicInfo from "./PokemonBasicInfo";
import PokemonStats from "./PokemonStats";
const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const { pokemonDetail, isLoading } = usePokemonDetail({ pokemonName });

  return (
    <Container sx={{ padding: 5 }}>
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        mt={1}
      >
        <Grid
          item
          container
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          {isLoading ? (
            <Box>Loading...</Box>
          ) : pokemonDetail ? (
            <>
              <Grid xs={12} sm={6}>
                <PokemonAvatar pokemon={pokemonDetail} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PokemonBasicInfo pokemon={pokemonDetail} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PokemonStats pokemon={pokemonDetail} />
              </Grid>
            </>
          ) : (
            <Box>Pokemon Not Found</Box>
          )}
        </Grid>
        <Grid item>
          <Button
            data-testid="btn-back"
            component={Link}
            to={"/"}
            variant="contained"
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PokemonDetail;
