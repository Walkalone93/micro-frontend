const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "dashboard",
    publicPath: "auto",
    scriptType:'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  experiments: {
    // Output ECMAScript module syntax whenever possible
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "dashboard",
        filename: "remoteEntry.js",
        exposes: {
          './DashboardApp': './src/bootstrap.ts',
        },
    }),
  ],
};