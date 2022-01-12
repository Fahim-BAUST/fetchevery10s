import React, { useEffect, useState } from 'react';
import { Button, Container, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export interface AllPosts {
    title: string,
    url: string,
    created_at: string,
    author: string
}

const Home: React.FC = () => {
    const [posts, setPosts] = useState<AllPosts[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(20);

    let page: number = 0;
    const post: AllPosts[] = []


    useEffect(() => {
        setInterval(() => {
            setLoading(true);
            page = page + 1;

            fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`)
                .then(res => res.json())
                .then(data => {
                    post.push(...data.hits)
                    setPosts(post)
                    setLoading(false);
                })
                .catch(error => {
                    alert(`${error.message}`);
                    setLoading(false);
                })


        }, 10000);

    }, [])

    const indexOfLastPost: number = currentPage * postsPerPage;
    const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
    const currentPosts: AllPosts[] = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <Container data-testid="home">
            <Typography sx={{ mt: 2 }} align='center' variant="h4" gutterBottom component="div">All Post</Typography>

            {loading ? <LinearProgress color="secondary" /> : <TableContainer sx={{ maxHeight: 450 }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                        <TableRow >
                            <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} >URL</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} >Created at</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} >Author</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} >Details</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {currentPosts.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell >{row.url}</TableCell>
                                <TableCell >{row.created_at}</TableCell>
                                <TableCell >{row.author}</TableCell>
                                <TableCell >
                                    <Link to={`/rawJson`} state={{ row }}><Button size="small">click</Button></Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}

            <Pagination sx={{ marginTop: 2 }} color="secondary" count={posts.length / postsPerPage} onChange={handleChange} />

        </Container>
    );
};

export default Home;