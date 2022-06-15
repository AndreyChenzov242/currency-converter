import React from 'react';
import {Box, Typography} from "@mui/material";
import {format} from "../utils/currencyUtils";

function RatesBanner({rates}) {
    return (
        <Box sx={{
            bgcolor: 'primary.dark',
            px: 2,
            py: 1,
            borderRadius: 5,
        }}>
            <Typography variant="body1" component="span">
                $: {format(1 / rates.USD)}
            </Typography>
            {' '}
            <Typography variant="body1" component="span">
                €: {format(1 / rates.EUR)}
            </Typography>
        </Box>
    );
}

export default RatesBanner;
