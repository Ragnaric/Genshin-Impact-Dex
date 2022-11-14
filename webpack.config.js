const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports={
    mode: "development",

    entry: `${SRC_DIR}/index.jsx`,
    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },

    target: "web",
    devServer: {
        port: "9500",
        static: DIST_DIR,
        open: true,
        hot: true ,
        liveReload: true
    },
    resolve: {

        extensions: ['.js','.jsx','.json']
    },
    module:{

        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
              test: /\.css$/i,
              include: SRC_DIR,
              use: ['style-loader', 'css-loader', 'postcss-loader'],
            }
        ]
    }
}