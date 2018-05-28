const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const common = require("./webpack.config.js");

module.exports = merge(common, {
    entry: {
        app: "./src/NewsApp.js",
        vendor: ["react", "redux", "react-redux", "react-router-dom"]
    },
    plugins: [
        new UglifyJSPlugin(),
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin(["dist"]),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest"
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        rules: [
            {
                use: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                }),
                test: /\.css$/
            }
        ]
    }
});
