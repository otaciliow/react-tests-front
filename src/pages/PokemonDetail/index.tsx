import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { type PokemonType } from '../../types/PokemonType';

import './styles.css';

interface IProps {
    fetchPokemonDetail: (id: number) => Promise<PokemonType>;
}

export function PokemonDetail({ fetchPokemonDetail }: IProps) {
    const params = useParams();

    const [error, setError] = useState(false);

    const [pokemon, setPokemon] = useState<PokemonType>({
        id: 0,
        name: '',
        image: '',
        type: '',
    });

    useEffect(() => {
        (async () => {
            setError(false);

            if (!params.id || params.id === '0') {
                setError(true);
                return;
            }

            const data = await fetchPokemonDetail(parseInt(params.id));

            setPokemon(data);
        })();
    }, [])
    return (
        <div className="container">
            {pokemon && !error && (
                <div className="pokemon-wrapper">
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.image} alt={`imagem do ${pokemon.name}`} />
                    <strong>Tipo: {pokemon.type}</strong>
                </div>
            )}
            {error && (
                <div className="pokemon-wrapper">
                    <h1>ID inválido!</h1>
                </div>
            )}
            <Link to='/dashboard'>
                <button>Voltar</button>
            </Link>
        </div>
    )
}