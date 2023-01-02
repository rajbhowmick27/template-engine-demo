const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dev = process.env.NODE_ENV !== "production";

// const hmrPlugins = dev ? ["webpack-hot-middleware/client"] : [];

const stylesHandler = 'style-loader';

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: dev ? "inline-source-map" : undefined,
  // entry: [...hmrPlugins, path.join(__dirname, "src", "index.js")],
  entry: [path.join(__dirname, "src", "client.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "static/media/[name].[contenthash].[ext]",
          },
        },
      },
      {
        test: /\.svg/,
        use: "@svgr/webpack",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    port: 3000,
    static: 'dist',
    hot: true,
  },
};
