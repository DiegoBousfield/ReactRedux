const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const DIST_DIR = path.join(__dirname, "dist");
const config = require("./webpack.dev.js");
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static("public"));

app.get("/*", (req, res, next) => {
  const filename = path.join(DIST_DIR, "index.html");
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  });
  // res.sendFile(path.join(__dirname, "/"));
});

app.listen(3000, function() {
  console.log("The app is listen on port 3000 \n");
});
