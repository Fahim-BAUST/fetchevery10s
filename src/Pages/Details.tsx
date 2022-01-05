import { Card, CardContent, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
interface AllPosts {
    title: string,
    url: string,
    created_at: string,
    author: string,
    objectID: string

}

const Details = () => {
    const { page, id } = useParams<{ page: string, id: string }>()
    const [post, setPost] = useState<AllPosts[]>([]);
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        setLoading(true);
        fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`)
            .then(res => res.json())
            .then(data => {
                const findRaw: AllPosts[] = data.hits.filter((d: AllPosts) => d.objectID === id)
                console.log(findRaw);
                setPost(findRaw);
                setLoading(false);
            })
            .catch(error => {
                alert(`${error.message}`);
                setLoading(false);
            })
    }, [])


    return (
        <Box sx={{ width: "60%", mx: "auto" }}>
            {loading ? <LinearProgress color="secondary" />
                :
                <Card >
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {post[0]?.created_at}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {post[0]?.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {post[0]?.author}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {post[0]?.url}
                        </Typography>
                    </CardContent>
                </Card>}


        </Box>
    );
};

export default Details;