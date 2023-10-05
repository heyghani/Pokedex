
import {render, screen} from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
    test('Home should be render correctly', () => {
        render(<Home />)
        const element = screen.getByTestId('btn-see-more')
        expect(element).toBeInTheDocument()
    })

    test('Should render button accepted type props', () => {
        render(<Home />)
        const element = screen.getByTestId('btn-normal')
        expect(element).toBeInTheDocument()
    })
})