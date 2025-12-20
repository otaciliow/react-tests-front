import { render, screen, within, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Login } from ".";

const navigateMock = vi.fn();

describe('Testa o componente de Login', () => {

    vi.mock('react-router-dom', () => ({
        useNavigate(){
            return navigateMock;
        },
    }));

    test('page must have a title "Fazer login"', async () => {
        render(<Login />);

        const title = await screen.findByRole('heading', {
            name: /fazer login/i
        });

        expect(title).toBeInTheDocument();
    })

    test('page must have two inputs', async () => {
        render(<Login />);

        // estrutura usada no curso (não funcionou por ter um input type text e um type password - role textbox só reconheceu type text):
        const inputs = await screen.findAllByRole('textbox');
        expect(inputs).toHaveLength(2);

        // expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
        // expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();

    })

    test('page must have a button', async () => {
        render(<Login />);

        const button = await screen.findByRole('button');

        expect(button).toBeInTheDocument();
    })

    // versão que fiz sem acompanhar o curso, identificando uma necessidade de teste e implementando:
    // test('page must have a button on the form', async () => {
    //     render(<Login />);

    //     const form = await screen.findByRole('form');
    //     const button = await within(form).findByRole('button', {name: /entrar/i});

    //     expect(button).toBeInTheDocument();
    // })

    // teste para exemplificar o uso do .findByPlaceholderText():
    test('page must have an e-mail input', async () => {
        render(<Login />);

        const inputEmail = await screen.findByPlaceholderText('Insira seu e-mail');

        expect(inputEmail).toBeInTheDocument();
    })

    test("form's submit must navigate to other page", async () => {
        render(<Login />);

        const button = await screen.findByRole('button');
        fireEvent.click(button);

        expect(navigateMock).toHaveBeenCalledTimes(1);
    })

})