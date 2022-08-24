export type ImageDataType = {
    src: string;
    alt: string;
};

export type StrapiImageType = {
    data?: {
        attributes: {
            url?: string | null;
            alternativeText?: string | null;
        }
    }
}


export const imageProps = (
    image: StrapiImageType | StrapiImageType['data'] | undefined | null,
): ImageDataType => {
    // @ts-ignore
    const attributes = image?.data?.attributes || image?.attributes;
    const src: string = attributes?.url || '';
    return {
        src: src.startsWith('http') ? src : `${process.env.STRAPI_URL}/${src}`,
        alt: attributes?.alternativeText || '',
    };
};
