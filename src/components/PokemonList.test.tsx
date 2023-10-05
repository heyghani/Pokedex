import {render, screen} from '@testing-library/react'
import PokemonList from './PokemonList'
import {MemoryRouter} from 'react-router-dom'

describe('Pokemon List', () => {
    const pokemon = [
        {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            pokedexNumber: 1
        },
        {
            name: "ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon/2/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            pokedexNumber: 2
        },
        {
            name: "venusaur",
            url: "https://pokeapi.co/api/v2/pokemon/3/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            pokedexNumber: 3
        }
    ]
    test('Component should render list of pokemons', () => {
        render(<MemoryRouter><PokemonList pokemons={pokemon} /></MemoryRouter>)
        const listElement = screen.getAllByRole('img')
        expect(listElement).toHaveLength(3)
    })
})