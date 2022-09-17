const exclusionList = require('metro-config/src/defaults/exclusionList');
const { getMetroAndroidAssetsResolutionFix, getMetroTools } = require('react-native-monorepo-tools');

const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();
const monorepoMetroTools = getMetroTools();

module.exports = {
  resolver: {
    // Ensure we resolve nohoist libraries from this directory.
    blockList: exclusionList(monorepoMetroTools.blockList),
    extraNodeModules: monorepoMetroTools.extraNodeModules,
  },
  server: {
    // ...and to the server middleware.
    enhanceMiddleware: middleware => {
      return androidAssetsResolutionFix.applyMiddleware(middleware);
    },
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    publicPath: androidAssetsResolutionFix.publicPath,
  },
  // Add additional Yarn workspace package roots to the module map.
  // This allows importing importing from all the project's packages.
  watchFolders: monorepoMetroTools.watchFolders,
};
