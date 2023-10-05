import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import PokemonDetail from './PokemonDetail'

describe('Pokemon Detail', () => {

    test('Component should render correctly', () => {
        render(<MemoryRouter><PokemonDetail /></MemoryRouter>)
        const listElement = screen.getByTestId('btn-back')
        expect(listElement).toBeInTheDocument()
    })

})