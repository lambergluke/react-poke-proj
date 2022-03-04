import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/system/Box';
import React from 'react';

const card = (
    
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
            </CardContent>
        </React.Fragment>
)


export const PokeCard = () =>{
    return(
        <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined"></Card>
        </Box>
    )
}