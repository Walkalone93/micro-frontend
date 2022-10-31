module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // preset-react - babel can process JSX tags
                        // preset-env - ES6+ to ES5
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        // additional features to browser (like async / await)
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}