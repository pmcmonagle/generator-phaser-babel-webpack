'use strict';

var path    = require('path'),
    webpack = require('webpack');

var source  = path.join(__dirname, 'src'),
    content = path.join(__dirname, 'static'),
    main    = 'main.js',
    min     = 'main.min.js',
    entry   = path.join(source, main);

module.exports = {
    entry: [
        entry,
        'webpack-dev-server/client?http://localhost:8080'
    ],

    output: {
        publicPath: '/',
        filename:   min
    },

    debug:   true,
    devtool: 'source-map',

    module: {
        loaders: [
            {
                test:    /\.js$/,
                include: source,
                loader:  'babel-loader',
                query:   {
                    presets: ['es2015']
                }
            }
        ]
    },

    devServer: {
        contentBase: content
    }
}
