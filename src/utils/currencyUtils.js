export function format(value) {
    if (isNaN(value))
        return '';
    return value.toFixed(2);
}

export function convert(value, from, to, rates) {
    return value / rates[from] * rates[to];
}
