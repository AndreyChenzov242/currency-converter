import React from 'react';
import {FormControl, InputAdornment, MenuItem, Select, TextField} from "@mui/material";

function CurrencyInput({value, onChange, currency, onCurrencyChange, currencies}) {
    const currencySelector = (
        <FormControl variant="standard">
            <Select value={currency} onChange={onCurrencyChange}>
                {currencies.map(currency => (
                    <MenuItem value={currency} key={currency}>{currency}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );

    return (
        <TextField
            sx={{width: 320}}
            autoComplete="off"
            label={currency}
            value={value}
            onChange={onChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end" variant="filled">
                        {currencySelector}
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default CurrencyInput;
