const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  return alias({
    // components: "./src/components",
    "@components/*": ["sandbox/src/components/*"]
  })(config);
};

// const rewireAliases = require("react-app-rewire-aliases");
// const { paths } = require("react-app-rewired");
// const path = require("path");

// /* config-overrides.js */
// module.exports = function override(config, env) {
//   config = rewireAliases.aliasesOptions({
//     "@components": path.resolve(__dirname, `${paths.appSrc}/components/`)
//   })(config, env);
//   return config;
// };
