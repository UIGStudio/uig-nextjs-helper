export type ApiErrorType = {
    statusCode: number;
    error: string;
    message: string;
};

export type NestedApiErrorType = {
    message: ApiErrorType;
};

export const initialApiError: ApiErrorType = {
    statusCode: 500,
    error: 'Error',
    message: 'Unknown error',
};

export type SeoList = Array<{
    id: string | number;
    slug: string;
    noIndex?: string;
    noFollow?: string;
    hideInSitemap?: string;
}>;
