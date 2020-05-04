const { injectBabelPlugin } = require("react-app-rewired");

const rootImport = [
  "root-import",
  {
    rootPathPrefix: "~",
    rootPathSiffix: "src",
  },
];
module.exports = (config) => injectBabelPlugin(rootImport, config);
