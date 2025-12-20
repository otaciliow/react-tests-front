import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

const navigateMock = vi.fn();

import { SignUp } from '.';

describe('tests for the SignUp component', () => {

    vi.mock('react-router-dom', () => ({
        useNavigate(){
            return navigateMock;
        }
    }))

    test('page must have 3 inputs', async () => {
        render(<SignUp />);

        const inputs = await screen.findAllByRole('textbox');

        expect(inputs).toHaveLength(3);
    });

    test('page must have inputs for name, email and password', async () => {
        render(<SignUp />);

        const inputName = await screen.findByPlaceholderText('Insira seu nome');
        const inputEmail = await screen.findByPlaceholderText('Insira seu e-mail');
        const inputPassword = await screen.findByPlaceholderText('Insira sua senha');

        expect(inputName).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
    });

    test('page must have a button', async () => {
        render(<SignUp />);

        const button = await screen.findByRole('button');

        expect(button).toBeInTheDocument();
    });

    test('page must have a title', async () => {
        render(<SignUp />);

        const title = await screen.findByRole('heading', {
            level: 1,
        });

        expect(title).toHaveTextContent('Cadastre-se');
    });

    test('button must navigate to dashboard page', async () => {
        render(<SignUp />);

        const button = await screen.findByRole('button');
        fireEvent.click(button);

        expect(navigateMock).toHaveBeenCalledTimes(1);
    })
})