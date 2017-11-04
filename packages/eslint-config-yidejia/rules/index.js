// @ts-nocheck

module.exports = {
    extends: [
        './best-practices',
        './errors',
        './node',
        './style',
        './variables',
        './es6',
        './imports',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module',
    },
    rules: {
        strict: 'error',
    }
};
