import { Card, CardContent, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


const Details: React.FC = () => {

    const location = useLocation();
    const post = location.state;

    const [loading, setLoading] = useState<boolean>(false);

    return (
        <Box data-testid="details" sx={{ width: "60%", mx: "auto" }}>
            {loading ? <LinearProgress color="secondary" />
                :
                <pre>
                    {
                        JSON.stringify(post, null, 2)
                    }
                </pre>
            }


        </Box>
    );
};

export default Details;