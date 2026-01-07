import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Dashboard } from '.';

import { fetchPokemonList } from '../../services/PokemonService';
import { faker } from '@faker-js/faker';

const mockFetchPokemonListFn = vi.fn(fetchPokemonList).mockImplementation(async () => {
    return [
        {
            id: 1,
            name: 'Pikachu',
            image: faker.image.url(),
            type: 'Eletrico',
        },
        {
            id: 2,
            name: 'Charmander',
            image: faker.image.url(),
            type: 'Fogo',
        }
    ]
})

describe('tests the Dashboard component', () => {

    test('page must have a title "Dashboard"', async () => {
        render(<Dashboard fetchPokemonList={mockFetchPokemonListFn} />);

        const title = await screen.findByRole('heading');

        // expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Dashboard');
    });

    test('page must render 10 pokemon', async () => {
        render(<Dashboard fetchPokemonList={mockFetchPokemonListFn} />);

        const pokemons = await screen.findAllByRole('listitem');

        expect(pokemons).toHaveLength(2);
    });

    test('page must have a Pikachu on the pokemons list', async () => {
        render(<Dashboard fetchPokemonList={mockFetchPokemonListFn} />);

        const target1 = await screen.findByText('Pikachu');

        expect(target1).toBeInTheDocument();
    });
})