import type { FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

export function Login() {
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        navigate('/dashboard');
    }

    return (
        <div>
            <h1>Fazer Login</h1>

            <form action="" onSubmit={handleSubmit} aria-label="login-form">
                {/* para o teste que fiz sozinho funcionar, são necessários labels para os inputs (verificar teste comentado no arquivo) */}
                {/* <label htmlFor="email">E-mail</label> */}
                <input type="text" placeholder="Insira seu e-mail" id="email" />

                {/* <label htmlFor="senha">Senha</label> */}
                {/* <input type="text" placeholder="Insira sua senha" id="senha" /> */}
                <input type="text" placeholder="Insira sua senha" id="senha" />

                <button type="submit">Entrar</button>

                <Link to={'/signup'}>Não tem cadastro? Clique aqui</Link>

            </form>

        </div>
    )
}