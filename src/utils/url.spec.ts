import {bindUrlParams, slugToData} from "./url";


describe('url', () => {
    const pages = [
        {
            slug: 'homepage',
            noIndex: undefined,
            noFollow: undefined,
            hideInSitemap: undefined,
            id: '1'
        },
        {
            slug: 'blog',
            noIndex: undefined,
            noFollow: undefined,
            hideInSitemap: undefined,
            id: '2'
        }
    ];

    const ctx = (slug?: string) => ({params: {slug}})

    it('slugToData', () => {
        expect(slugToData(ctx('homepage'), pages)).toEqual(pages[0]);
        expect(slugToData(ctx(), pages, 'homepage'),).toEqual(pages[0]);
        expect(slugToData(ctx('homepage'), pages, 'homepage', ['homepage']),).toEqual(undefined);
        expect(slugToData(ctx('non-existing-slug'), pages)).toEqual(undefined);
    })

    const route = '/path/:to/:some/:id';

    it('slugToData', () => {
        expect(bindUrlParams(route, {to: 'to', some: 'some', id: 4})).toEqual('/path/to/some/4');
        expect(bindUrlParams(route, {to: 'to', some: 'some'})).toEqual('/path/to/some/:id');
        expect(bindUrlParams(route, {to: 'to', id: 4})).toEqual('/path/to/:some/4');
        expect(bindUrlParams(route, {to: 'to'})).toEqual('/path/:to/:some/:id');
    })
})

