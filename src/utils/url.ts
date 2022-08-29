import {GetServerSidePropsContext, GetStaticPropsContext} from 'next';

import {objectHas} from './object';
import {SeoList} from '../types/api';
import {PREVIEW_ID_PREFIX} from './consts';

export type QueryParamsType = Record<string,
    string | boolean | Date | number | undefined | null>;

export const createUrl = (baseUrl: string | undefined, path: string) => {
    if (/https?:/.test(path)) {
        return path;
    }
    return [
        (baseUrl || process.env.NEXT_PUBLIC_API || '').replace(/\/$/, ''),
        path.replace(/^\//, ''),
    ].join('/');
};

export const resolveUrl = (
    baseUrl: string | undefined,
    path: string,
    queryParams: QueryParamsType = {},
    bindParams: QueryParamsType = {},
) => {
    const url = new URL(createUrl(baseUrl, bindUrlParams(path, bindParams)));
    if (queryParams) {
        Object.entries(queryParams).forEach(([name, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.append(name, value.toString());
            }
        });
    }
    return url.href;
};

export const bindUrlParams = (route: string, params: QueryParamsType) => {
    return route.replace(/:(\w+)/g, (_, key) =>
        objectHas(params, key) ? params[key]?.toString() || '' : '',
    );
};

export const slugToData = (
    ctx: GetStaticPropsContext,
    items: SeoList,
    defaultSlug?: string,
    blockList?: string[],
) => {
    let slug = `${ctx.params?.slug}`;
    if ((!ctx.params?.slug && !defaultSlug) || (blockList || []).includes(slug)) {
        return undefined;
    }
    if (!ctx.params?.slug && defaultSlug) {
        slug = `${defaultSlug}`;
    }

    if (slug.startsWith(PREVIEW_ID_PREFIX)) {
        const [, id] = slug.split('_');
        return {
            slug: '',
            id: Number(id),
        };
    }
    return items.find((p) => p.slug === slug);
};

export const absoluteUrl = (...parts: string[]) => {
    return [`${process.env.NEXT_PUBLIC_URL}`, ...parts]
        .filter((p) => !!p)
        .map((p) => p.replace(/^\//, '').replace(/\/$/, ''))
        .join('/');
};

export const queryPage = (ctx: GetServerSidePropsContext) => {
    const page = queryParam(ctx, 'page', '1');
    return /\d+/.test(page) ? Number(page) : 1;
};

export const queryParam = <T>(
    ctx: GetServerSidePropsContext,
    key: string,
    defaultValue: T,
) => {
    return ctx.query?.[key] ? `${ctx.query?.[key]}` : defaultValue;
};
