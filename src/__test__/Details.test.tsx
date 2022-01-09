import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from '../Pages/Details';

import { createMemoryHistory } from 'history'

test('renders learn react link', () => {

    render(<Details />);
    const linkElement = screen.getByTestId("details");
    expect(linkElement).toBeInTheDocument();
});