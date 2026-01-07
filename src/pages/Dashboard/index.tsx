import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { type PokemonType } from '../../types/PokemonType';

interface IProps {
    fetchPokemonList: () => Promise<PokemonType[]>;
}

import './styles.css';

export function Dashboard({ fetchPokemonList }: IProps) {
    const navigate = useNavigate();

    const [pokemons, setPokemons] = useState<PokemonType[]>([]);

    useEffect(() => {
        (async () => {
            const data = await fetchPokemonList();
            setPokemons(data);
        })()
    }, [])

    function handleNavigateToPokemonDetail(id: number) {
        navigate(`/pokemon-detail/${id}`);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id} onClick={() => handleNavigateToPokemonDetail(pokemon.id)}>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.image} alt={`imagem ${pokemon.name}`} />
                        <p>{`Tipo: ${pokemon.type}`}</p>
                    </li>
                ) )}
            </ul>
        </div>
    )
}