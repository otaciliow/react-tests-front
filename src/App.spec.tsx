import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from './App';

describe("Testa o componente App", () => {

    test('page must have a title', async () => {
        render(<App />);

        const title = await screen.findByRole('heading');

        expect(title).toBeInTheDocument();
    });

    test('page must have a title with content "Hello World"', async () => {
        render (<App />);

        const title = await screen.findByRole('heading');

        expect(title.textContent).toBe('Hello World');
    });

    test('page must not have more than one title', async () => {
        render (<App />);

        const titles = await screen.findAllByRole('heading');

        expect(titles).toHaveLength(1);
    })
});