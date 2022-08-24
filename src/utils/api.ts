import {ApiErrorType, initialApiError, NestedApiErrorType} from '../types/api';

export const parseApiError = (
    error: NestedApiErrorType | ApiErrorType | string | unknown,
): ApiErrorType => {
    switch (typeof error) {
        case 'string':
            return {
                ...initialApiError,
                message: error,
            };
        case 'object':
            return {
                ...initialApiError,
                ...((error as NestedApiErrorType)?.message || error),
                message:
                    (error as NestedApiErrorType)?.message?.message ||
                    (error as ApiErrorType)?.message,
                ...((error as ApiErrorType)?.statusCode && {
                    statusCode: (error as ApiErrorType).statusCode,
                }),
            };
        default:
            return initialApiError;
    }
};
