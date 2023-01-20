module.exports = {
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ["ts-loader"],
      },
    ],
  },
};
