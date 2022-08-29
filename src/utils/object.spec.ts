import {objectEntries, objectHas} from "./object";

describe('object', () => {
    it('objectEntries', () => {
        expect(objectEntries({a: 1, b: 2})).toEqual([['a', 1], ['b', 2]]);
    });

    it('objectHas', () => {
        expect(objectHas({a: 1, b: 2}, 'a')).toEqual(true);
        expect(objectHas({a: 1, b: 2}, 'c')).toEqual(false);
    });
});

