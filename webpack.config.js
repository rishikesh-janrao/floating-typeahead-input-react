const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "MyReactComponent",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader
      },
    ],
  },
  resolve: {
    extensions: ["", ".jsx"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  mode: "production",
};
