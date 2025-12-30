import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MainRoutes from "../routes";

describe('Testa o componente MainRoutes', () => {
    test('page sign-in must be rendered', async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <MainRoutes />
            </MemoryRouter>
        );

        const title = await screen.findByRole('heading', {
            name: /fazer login/i
        });

        expect(title).toBeInTheDocument();
    });

    test('page sign-up must be rendered', async () => {
        render(
            <MemoryRouter initialEntries={["/signup"]}>
                <MainRoutes />
            </MemoryRouter>
        );

        const title = await screen.findByRole('heading', {
            name: /cadastre-se/i
        });

        expect(title).toBeInTheDocument();
    });

    test('page dashboard must be rendered', async () => {
        render(
            <MemoryRouter initialEntries={["/dashboard"]}>
                <MainRoutes />
            </MemoryRouter>
        );

        const title = await screen.findByRole('heading', {
            name: /dashboard/i
        });

        expect(title).toBeInTheDocument();
    });

})