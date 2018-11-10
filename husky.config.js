module.exports = {
    hooks: {
        'pre-commit': 'pretty-quick --staged',
        'pre-push': 'npm test',
        'post-checkout': 'check-dependencies --install && npm audit fix',
        'post-merge': 'check-dependencies --install && npm audit fix',
    },
};
