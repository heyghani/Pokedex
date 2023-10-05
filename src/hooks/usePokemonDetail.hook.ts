import { useEffect, useState } from "react";
import { DetailPokemon } from "../interfaces/pokemon.interface";
import { POKEMON_API_POKEMON_URL } from "../constants";
import { httpClient } from "../api/httpClient";

interface usePokemonDetailProps {
    pokemonName: string | undefined
}

const usePokemonDetail = ({pokemonName} : usePokemonDetailProps) => {
    const [pokemonDetail, setPokemonDetail] = useState<DetailPokemon | null>(null)
    const [isLoading, setIsLoading] = useState<Boolean>(false)

    const fetchDetail = async () => {
        if (pokemonName) {
            setIsLoading(true)
            const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`
            const result = await httpClient.get<DetailPokemon>(url)
            if (result?.data) {
                setPokemonDetail(result.data)
            }
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (pokemonName) {
            fetchDetail()
        }
    }, [pokemonName])

    return {pokemonDetail, isLoading}
}

export default usePokemonDetail;