import './styles.css';

export function Login() {
    return (
        <div>
            <h1>Sign In</h1>

            <form action="" aria-label="login-form">
                {/* foi necessário adicionar um label para cada input para que o teste funcionasse com a estrutura correta */}
                <label htmlFor="email">E-mail</label>
                <input type="text" placeholder="Insira seu e-mail" id="email" />

                <label htmlFor="senha">Senha</label>
                <input type="text" placeholder="Insira sua senha" id="senha" />

                <button>Entrar</button>
            </form>

        </div>
    )
}