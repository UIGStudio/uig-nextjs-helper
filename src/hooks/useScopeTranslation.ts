import {StringMap} from 'i18next';
import {useTranslation} from 'next-i18next';

export const useScopeTranslation = (namespace: string, ...scopes: string[]) => {
    const {t} = useTranslation(namespace);
    const finalScope = scopes && scopes.length ? `${scopes.join('.')}.` : '';
    return (key: string, option?: StringMap) => t(`${finalScope}${key}`, option);
};
