import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Dashboard } from '.';

describe('tests the Dashboard component', () => {

    test('page must have a title "Dashboard"', async () => {
        render(<Dashboard />);

        const title = await screen.findByRole('heading');

        // expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Dashboard');
    })
})