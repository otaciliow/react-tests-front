import { Routes, Route } from 'react-router-dom';

import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { SignUp } from './Signup';

import { fetchPokemonList } from './services/PokemonService';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard fetchPokemonList={fetchPokemonList} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    )
}