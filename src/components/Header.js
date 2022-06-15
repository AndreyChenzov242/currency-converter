import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import RatesBanner from "./RatesBanner";

function Header({rates, loaded}) {
    return (
        <AppBar position="relative">
            <Toolbar sx={{gap: 1}}>
                <Typography variant="h6" component="h1">
                    Currency Converter
                </Typography>
                {
                    loaded && <RatesBanner rates={rates}/>
                }
            </Toolbar>
        </AppBar>
    );
}

export default Header;
