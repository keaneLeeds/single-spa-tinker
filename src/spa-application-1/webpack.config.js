const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "keane",
    projectName: "spa-application-1",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["spa-application-2"]
    // modify the webpack config however you'd like to by adding to this object
  });
};
