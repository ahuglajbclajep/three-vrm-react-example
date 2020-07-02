const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // from webpack
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

/** @type {(env: typeof process.env, argv: { mode?: string }) => import("webpack").Configuration} */
module.exports = (env, { mode }) => {
  const dev = mode !== "production";
  return {
    // see https://github.com/webpack/webpack-dev-server/issues/1327
    mode: "development",
    entry: "./src/index",
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, `css-loader?sourceMap=${dev}`],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.ejs",
        title: process.env.npm_package_name,
      }),
      new MiniCssExtractPlugin(),
    ],
    resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
    optimization: {
      minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()],
    },
    devtool: dev ? "inline-source-map" : false,
    devServer: {
      contentBase: "./dist",
      // host: "0.0.0.0", // for debugging on mobile devices
      overlay: true,
      watchContentBase: true,
    },
  };
};
