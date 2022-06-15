import React from 'react';
import {ExchangeRateApi} from "../api/ExchangeRate";
import {Box} from "@mui/material";
import Header from "./Header";
import CurrencyConverter from "./CurrencyConverter";

function MainPage() {
    const [rates, setRates] = React.useState({
        value: null,
        loaded: false,
    });

    React.useEffect(() => {
        ExchangeRateApi.latest()
            .then(value => setRates({value, loaded: true}))
            .catch(error => {
                throw error
            });
    }, [])

    return (
        <Box>
            <Header rates={rates.value} loaded={rates.loaded}/>
            {
                rates.loaded && (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 1,
                    }}>
                        <CurrencyConverter rates={rates.value}/>
                    </Box>
                )
            }
        </Box>
    );
}

export default MainPage;
