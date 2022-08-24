import {HOMEPAGE_SLUG} from './consts';


export function linkTarget(target = '_self') {
    return target[0] === '_' ? target : `_${target}`;
}


export function linkRel(target: string) {
    if (linkTarget(target) === '_blank') {
        return {rel: 'nofollow noopener noreferrer'};
    }
    return {};
}

export function slugToUrl(seo: { slug: string }, prefix?: string) {
    const slug = [prefix, HOMEPAGE_SLUG === seo.slug ? '' : seo.slug]
        .filter((e) => !!e)
        .join('/');
    return `/${slug}`;
}


