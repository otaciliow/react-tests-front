import { useState, useEffect } from 'react';

import './styles.css';

type PokemonType = {
    id: number,
    name: string,
    image: string,
    type: string,
}

export function Dashboard() {

    const [pokemons, setPokemons] = useState<PokemonType[]>([]);

    useEffect(() => {
        async function loadData() {
            const response = await fetch('http://localhost:3000/pokemon');

            const data = await response.json();

            setPokemons(data);
        }

        loadData();
    }, [])

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {pokemons.map((pokemon) => (
                    <li>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.image} alt={`imagem ${pokemon.name}`} />
                        <p>{`Tipo: ${pokemon.type}`}</p>
                    </li>
                ) )}
            </ul>
        </div>
    )
}