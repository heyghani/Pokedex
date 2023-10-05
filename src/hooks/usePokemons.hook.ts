import { useEffect, useState } from "react";
import {
  IndexedPokemon,
  IndexedType,
  ListPokemon,
  PokemonByTypeListResponse,
  PokemonListResponse,
} from "../interfaces/pokemon.interface";
import {
  POKEMON_API_POKEMON_URL,
  POKEMON_IMAGES_BASE_URL,
  POKEMON_TYPES,
} from "../constants";
import { httpClient } from "../api/httpClient";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<ListPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(
    POKEMON_API_POKEMON_URL
  );
  const [selectedType, setSelectedType] = useState<IndexedType | null>(null);

  const getIndexPokemon = (indexedPokemon: IndexedPokemon) => {
    const pokedexNumber = parseInt(
      indexedPokemon.url
        .replace(`${POKEMON_API_POKEMON_URL}/`, "")
        .replace("/", "")
    );

    const listPokemon: ListPokemon = {
      name: indexedPokemon.name,
      url: indexedPokemon.url,
      image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
      pokedexNumber: pokedexNumber,
    };

    return listPokemon;
  };

  const fetchPokemon = async () => {
    if (nextUrl) {
      const result = await httpClient.get<PokemonListResponse>(nextUrl);
      if (result?.data) {
        const listPokemons = result.data.results.map((item) =>
          getIndexPokemon(item)
        );
        setPokemons([...pokemons, ...listPokemons]);
        setNextUrl(result.data.next);
      }
    }
  };

  const fetchPokemonsByType = async () => {
    if (selectedType) {
      const result = await httpClient.get<PokemonByTypeListResponse>(
        selectedType.url
      );
      if (result?.data?.pokemon) {
        const listPokemons = result.data.pokemon.map((item) =>
          getIndexPokemon(item.pokemon)
        );
        setPokemons(listPokemons);
        setNextUrl(POKEMON_API_POKEMON_URL);
      }
    }
  };

  useEffect(() => {
    if (selectedType) {
      fetchPokemonsByType();
    } else {
      fetchPokemon();
    }
  }, [selectedType]);

  return {
    pokemons,
    fetchNextPage: fetchPokemon,
    hasMorePage: !!nextUrl,
    pokemonTypes: POKEMON_TYPES,
    selectedType,
    setSelectedType,
    setPokemons,
  };
};

export default usePokemons;
