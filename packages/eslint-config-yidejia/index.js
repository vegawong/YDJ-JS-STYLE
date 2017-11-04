// @ts-nocheck

module.exports = {
    extends: [
        './rules',
        './rules/strict',
    ].map(require.resolve),
    rules: {}
};
