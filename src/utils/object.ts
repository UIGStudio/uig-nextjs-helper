export const objectEntries = <Keys extends string | number | symbol, Value>(obj: {
    [K in Keys]?: Value;
}): Array<[Keys, Value]> => {
    // Object.entries typings error
    // @ts-ignore
    return Object.entries(obj);
};

export const objectHas = (obj: Record<string, unknown>, key: string | number) =>
    Object.prototype.hasOwnProperty.call(obj, key);
