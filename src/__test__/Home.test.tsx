import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home';


test('renders learn react link', () => {

    render(<Home />);
    const linkElement = screen.getByTestId("home");
    expect(linkElement).toBeInTheDocument();
});