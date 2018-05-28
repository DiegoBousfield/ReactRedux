const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.png|svg|jpg|gif|ico$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    }
};
