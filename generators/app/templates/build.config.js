'use strict';

var path    = require('path'),
    webpack = require('webpack');

var source = path.join(__dirname, 'src'),
    dist   = path.join(__dirname, 'dist'),
    main   = 'main.js',
    min    = 'main.min.js',
    entry  = path.join(source, main);

module.exports = {
    entry: entry,

    output: {
        path:     dist,
        filename: min
    },

    debug:   false,
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
    }
}
