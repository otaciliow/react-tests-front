import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as rrd from 'react-router-dom';

import { PokemonDetail } from '.';

import { fetchPokemonDetail } from '../../services/PokemonService';
import { faker } from '@faker-js/faker';

const mockFetchPokemonDetailFn = vi.fn(fetchPokemonDetail).mockImplementation(async () => {
    return {
        id: 1,
        name: 'Pikachu',
        image: faker.image.url(),
        type: 'Eletrico',
    }
});

describe('testa o componente PokemonDetail', () => {

    vi.mock('react-router-dom', () => {
        return {
            useParams: () => ({id: 1}),
            Link: vi.fn().mockImplementation((props) => props.children),
        }
    });

    test('page must have a title', async () => {
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />)

        const title = await screen.findByRole('heading', {
            name: 'Pikachu'
        });

        expect(title).toBeInTheDocument();
    });

    test('page must have a link to return', async () => {
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />);

        const link = await screen.findByText('Voltar');

        expect(link).toBeInTheDocument();
    });

    test('page must have a valid parameter', async () => {
        vi.spyOn(rrd, 'useParams').mockImplementationOnce(() => ({id: '0'}));

        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />);

        const errorTitle = await screen.findByRole('heading', {
            name: 'ID inválido!'
        });

        expect(errorTitle).toBeInTheDocument();
    });
});