const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const isDev = (process.env.NODE_ENV || "").trim() === "development";

module.exports = {
  mode: isDev
   ? "development"
   : "production",
  entry: ["react-hot-loader/patch", "./src/client.tsx"],
  cache: true,

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isDev ? "bundle.js" : "[hash].bundle.js",
    chunkFilename: isDev ? "[name].bundle.js" : "[name].[hash].bundle.js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
            },
          },
          "ts-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
            },
          },
          "cache-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader",
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],

    alias: {
      "~": path.resolve(__dirname, "src"),
      "react-dom": "@hot-loader/react-dom",
    },
  },

  devtool: isDev ? "source-map" : "none",

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 1234,
    hot: true,
    historyApiFallback: true,
    host: "0.0.0.0",
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
      chunks: ["main"],
      inject: "head",
      scriptLoading: "defer",
    }),
    ...isDev
     ? [
      new webpack.HotModuleReplacementPlugin(),
    ]
     : [
       new CopyPlugin([{
         from: "public"
       }]),
     ],
  ],
};