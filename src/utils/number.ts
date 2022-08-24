export const formatNumber = (value: number | string) =>
    Number(`${value}`).toLocaleString('en', {useGrouping: true});

export const formatPrice = (value: number | string) => `$${formatNumber(value)}`;

export const minMax = (min: number, value: number, max: number) =>
    Math.max(min, Math.min(value, max));
