import type { FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './styles.css';

export function SignUp() {
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        navigate('/dashboard');
    }

    return (
        <div>
            <h1>Cadastre-se</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Insira seu nome" />
                <input type="text" placeholder="Insira seu e-mail" />
                <input type="text" placeholder="Insira sua senha" />
                <button>Cadastrar</button>
                <Link to={'/'}>Já tem cadastro? Clique aqui</Link>
            </form>
        </div>
    )
}