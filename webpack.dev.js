const merge = require("webpack-merge");
const common = require("./webpack.config.js");
const webpack = require("webpack");

module.exports = merge(common, {
    entry: ["webpack-hot-middleware/client", "./src/NewsApp.js"],
    devtool: "inline-source-map",
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                use: ["style-loader", "css-loader"],
                test: /\.css$/
            }
        ]
    },
    output: {
        publicPath: "/"
    }
});
