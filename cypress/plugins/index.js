const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on) => {
    on(
        'file:preprocessor',
        webpackPreprocessor({
            webpackOptions: {
                module: {
                    rules: [
                        {
                            test: /\.php$/,
                            use: 'uniter-loader',
                        },
                    ],
                },
            },
        })
    );
};
