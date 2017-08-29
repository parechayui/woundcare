var webpack = require('webpack');
const path = require("path");
var ChunkHashReplacePlugin = require('chunkhash-replace-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var ManifestPlugin = require('webpack-manifest-plugin');
var node_dir = __dirname + '/node_modules';
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineManifestWebpackPlugin=require('inline-manifest-webpack-plugin');

module.exports = {
    context: __dirname + '/app',

    entry: {
        app: './app.js',
        vendor: ['angular', 'underscore', 'restangular', 'angular-ui-router', 'bootstrap', 'angular-ui-bootstrap', 'angular-animate', 'angular-sanitize','angular-material']
    },
    output: {
        path: path.join(__dirname, "js"),
        filename: "[name].bundle.js"
        // filename: "[name].[chunkhash].bundle.js"

    },
    plugins: [
        function() {
            this.plugin("done", function(stats) {
                require("fs").writeFileSync(
                    path.join(__dirname, "js", "stats.json"),
                    JSON.stringify(stats.toJson()));
            });
        },
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.ProvidePlugin({
            _: "underscore",
            underscore: "underscore"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor"], // vendor libs + extracted manifest
            minChunks: Infinity
        }),
        new ManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest"
        }),
        new WebpackMd5Hash(),
        new InlineManifestWebpackPlugin({
            name: 'webpackManifest'
        })
        ,
        new HtmlWebpackPlugin({
           title: 'Wound Care Portal',
           template: 'index.ejs',
           filename:'../index.html'
        })

    ],
    devServer: {
        inline: true,
        port:9001
    },
    resolve: {
        alias: {
            "underscore": node_dir + "/underscore/underscore-min.js"
        }
    }
};
