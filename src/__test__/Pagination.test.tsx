import { render, screen } from '@testing-library/react';
import Pagination from '../Pages/Pagination';



test('renders learn react link', () => {

    const paginate = (number: number): void => {
        console.log(number);
    }

    render(<Pagination postsPerPage={6}
        totalPosts={6}
        paginate={paginate} />);
    const linkElement = screen.getByTestId("pagination");
    expect(linkElement).toBeInTheDocument();
});