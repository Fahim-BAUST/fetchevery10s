import { Box, Button } from '@mui/material';
import React from 'react';


interface Props {
    postsPerPage: number,
    totalPosts: number,
    paginate: (number: number) => void
}

const Pagination = ({ postsPerPage, totalPosts, paginate }: Props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (


        <Box style={{ marginInline: "15px", textAlign: "center", marginTop: 20, marginBottom: "50px" }}>
            {pageNumbers.map(number => (
                <Button key={number} variant="outlined" size="small" onClick={() => paginate(number)}>{number}</Button>

            ))}

        </Box>


    );
};
export default Pagination;