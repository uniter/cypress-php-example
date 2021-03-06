module.exports = {
    plugins: [
        // Install PHP eval(...) support
        require('phpruntime/src/plugin/eval'),

        // Install support for basic PCRE preg_*(...) function emulation
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
            // Make stack frames that come from PHP code that was transpiled to JavaScript
            // appear more cleanly in the stack traces that Cypress displays
            stackCleaning: true,
        },
        phptojs: {
            lineNumbers: true,
            mode: 'sync',
            // As above
            stackCleaning: true,
        },
    },
};
