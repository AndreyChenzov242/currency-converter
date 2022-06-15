import React from 'react';
import {Box} from "@mui/material";
import CurrencyInput from "./CurrencyInput";
import {CURRENCIES} from "../api/ExchangeRate";
import {convert, format} from "../utils/currencyUtils";

function hasDecimalPlace(value, x) {
    let pointIndex = value.indexOf('.');
    return pointIndex >= 0 && pointIndex < value.length - x;
}

function CurrencyConverter({rates}) {
    const [firstValue, setFirstValue] = React.useState('');
    const [secondValue, setSecondValue] = React.useState('');

    const [firstCurrency, setFirstCurrency] = React.useState('USD');
    const [secondCurrency, setSecondCurrency] = React.useState('UAH');

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
        }}>
            <CurrencyInput
                value={firstValue}
                onChange={e => {
                    if (e.target.value === '') {
                        setFirstValue('');
                        setSecondValue('');
                    } else if (!isNaN(e.target.value)) {
                        if (!hasDecimalPlace(e.target.value, 3)) {
                            setFirstValue(e.target.value);
                            setSecondValue(format(convert(e.target.value, firstCurrency, secondCurrency, rates)));
                        }
                    }
                }}
                currency={firstCurrency}
                onCurrencyChange={e => {
                    setFirstCurrency(e.target.value);
                    if (firstValue !== '')
                        setSecondValue(format(convert(firstValue, e.target.value, secondCurrency, rates)));
                }}
                currencies={CURRENCIES}/>
            <CurrencyInput
                value={secondValue}
                onChange={e => {
                    if (e.target.value === '') {
                        setFirstValue('');
                        setSecondValue('');
                    } else if (!isNaN(e.target.value)) {
                        if (!hasDecimalPlace(e.target.value, 3)) {
                            setSecondValue(e.target.value);
                            setFirstValue(format(convert(e.target.value, secondCurrency, firstCurrency, rates)));
                        }
                    }
                }}
                currency={secondCurrency}
                onCurrencyChange={e => {
                    setSecondCurrency(e.target.value);
                    if (firstValue !== '')
                        setSecondValue(format(convert(firstValue, firstCurrency, e.target.value, rates)));
                }}
                currencies={CURRENCIES}/>
        </Box>
    );
}

export default CurrencyConverter;
