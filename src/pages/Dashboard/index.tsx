import { useState, useEffect } from 'react';

import { type PokemonType } from '../../types/PokemonType';

interface IProps {
    fetchPokemonList: () => Promise<PokemonType[]>;
}

import './styles.css';

export function Dashboard({ fetchPokemonList }: IProps) {

    const [pokemons, setPokemons] = useState<PokemonType[]>([]);

    useEffect(() => {
        (async () => {
            const data = await fetchPokemonList();
            setPokemons(data);
        })()
    }, [])

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.image} alt={`imagem ${pokemon.name}`} />
                        <p>{`Tipo: ${pokemon.type}`}</p>
                    </li>
                ) )}
            </ul>
        </div>
    )
}