const PROD = process.env.NODE_ENV === 'production';

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['.eslintrc.js', '.prettierrc.js'],
    rules: {
        'no-eval': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
    },
};
