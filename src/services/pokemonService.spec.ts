import { type PokemonType } from "../types/PokemonType";
import { fetchPokemonList, fetchPokemonDetail } from './PokemonService';
import { faker } from '@faker-js/faker';

global.fetch = vi.fn()

function createFetchResponse(data: any) {
    return { json: () => new Promise((resolve) => resolve(data)) }
}

describe('testa o serviço PokemonService', () => {
    test('checks if get list is made on correct url', async () => {
        const pokemonListResponse: PokemonType[] = [
            {
                id: 1,
                name: faker.animal.bear.name,
                image: faker.image.url(),
                type: faker.animal.type(),
            },
            {
                id: 2,
                name: faker.animal.bear.name,
                image: faker.image.url(),
                type: faker.animal.type(),
            },
        ];

        fetch.mockResolvedValue(createFetchResponse(pokemonListResponse));

        const pokemonList = await fetchPokemonList();

        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/pokemon');
        expect(pokemonList).toStrictEqual(pokemonListResponse);
    });

    test('checks if get list is made on correct url', async () => {
        const pokemonDetailResponse: PokemonType = {
                id: 1,
                name: faker.animal.bear.name,
                image: faker.image.url(),
                type: faker.animal.type(),
            };

        fetch.mockResolvedValue(createFetchResponse(pokemonDetailResponse));

        const pokemonList = await fetchPokemonDetail(1);

        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/pokemon/1');
        expect(pokemonList).toStrictEqual(pokemonDetailResponse);
    });
})