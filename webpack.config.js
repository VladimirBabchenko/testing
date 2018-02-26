const path = require("path");
const webpack = require("webpack");
const NODE_ENV = process.env.NODE_ENV || "development";
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, "src/home.js"),
        app1: path.join(__dirname, "src/name.js")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].build.js",
        library: "home"
    },

    watch: NODE_ENV == "development",

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == "development" ? "inline-cheap-module-source-map" : false,

    plugins: [
        new HtmlWebpackPlugin({
            filename: "./index.html"
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],

    resolve: {
        modules: ["node_modules"],
        extensions: ["*", ".js"]
    }
}

if (NODE_ENV == "production") {
    module.exports.plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false
            }
        })
    )
}