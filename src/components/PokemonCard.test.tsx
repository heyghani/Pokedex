import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import PokemonCard from './PokemonCard'

describe('Pokemon Card', () => {
    const pokemon = {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        pokedexNumber: 1
    }

    test('Component should render correctly', () => {
        render(<MemoryRouter><PokemonCard pokemon={pokemon} /></MemoryRouter>)
        const listElement = screen.getByText('bulbasaur')
        expect(listElement).toBeInTheDocument()
    })

    test('Component should render pokemon image', () => {
        render(<MemoryRouter><PokemonCard pokemon={pokemon} /></MemoryRouter>)
        const listElement = screen.getByRole('img')
        expect(listElement).toBeInTheDocument()
    })
})