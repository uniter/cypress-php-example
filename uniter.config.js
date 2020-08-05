module.exports = {
    plugins: [
        require('phpruntime/src/plugin/eval'),
        require('phpruntime/src/plugin/pcre/basicSupport'),
    ],
    settings: {
        phpify: {
            bootstraps: [
                'uniter/bootstraps/early.js',
                'uniter/bootstraps/late.php',
            ],
            include: [
                'uniter/lib/**/*.php',
                'vendor/autoload.php',
                'vendor/composer/**/*.php',
            ],
        },
        phpcore: {
            'just a test': 'of top-level config',
        },
        phptojs: {
            lineNumbers: true,
            mode: 'sync',
        },
    },
};
