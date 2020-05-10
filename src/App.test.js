import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders add todo button', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/add new todo/i);
    expect(linkElement).toBeInTheDocument();
});
