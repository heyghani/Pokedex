import { useEffect, useState } from "react";
import { IndexedPokemon, PokemonListResponse } from "../interfaces/pokemon.interface";
import { POKEMON_API_POKEMON_URL } from "../constants";
import { httpClient } from "../api/httpClient";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<IndexedPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)

    const fetchPokemon = async () => {
        if (nextUrl) {
            const result = await httpClient.get<PokemonListResponse>(nextUrl)
            if (result?.data) {
                setPokemons(result.data.results)
            }
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [])


    return {pokemons}
}

export default usePokemons;