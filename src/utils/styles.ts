export const bp = (size = 770, minmax: 'min' | 'max' = 'min'): string =>
    `only screen and (${minmax}-width: ${size / 16}em)`;
