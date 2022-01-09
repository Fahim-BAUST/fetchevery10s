import { Box, Button } from '@mui/material';
import React from 'react';


interface Props {
    postsPerPage: number,
    totalPosts: number,
    paginate: (number: number) => void
}

const Pagination: React.FC<Props> = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (

        <Box data-testid="pagination" style={{ marginInline: "15px", textAlign: "center", marginTop: 20, marginBottom: "50px" }}>
            {pageNumbers.map(number => (
                <Button key={number} variant="outlined" size="small" onClick={() => paginate(number)}>{number}</Button>

            ))}

        </Box>


    );
};
export default Pagination;