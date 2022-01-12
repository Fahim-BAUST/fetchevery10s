import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from '../Pages/Details';

const mockedUsedLocation = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useLocation: () => mockedUsedLocation,
}));

test('renders learn react link', () => {
    render(<Details />);
    const linkElement = screen.getByTestId("details");
    expect(linkElement).toBeInTheDocument();
});


