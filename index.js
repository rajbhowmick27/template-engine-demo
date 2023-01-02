require("dotenv").config();
// const babelRegister = require('@babel/register');
// babelRegister({
//   ignore: [/[\\\/](build|server\/server|node_modules)[\\\/]/],
//   presets: [['react-app', {runtime: 'automatic'}]],
//   plugins: ['@babel/transform-modules-commonjs'],
// });

require("@babel/register")({
  ignore: [/(node_module)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "transform-assets",
      {
        extensions: ["css", "svg", "png"],
        name: "static/media/[name].[hash:8].[ext]",
      },
    ],
  ],
});
const dev = process.env.NODE_ENV !== "production";
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, "client", "dist")));

const render = require('./render');

if (dev) {
  const webpackDev = require("./dev");
  app.use(webpackDev.comp).use(webpackDev.hot);
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

console.log(render())

app.get("/html", (req,res) => {
  const html = render();
  const indexFile = path.resolve('./client/dist/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  })

})

app.listen(3000, function () {
  console.log("Server started on :3000");
});
