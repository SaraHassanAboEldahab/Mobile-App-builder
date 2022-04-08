const core = require("@actions/core");
const name = core.getInput("appName");
const slug = core.getInput("slug");
const icon = core.getInput("icon");
const image = core.getInput("image");
const bundleIdentifier = core.getInput("bundleIdentifier");
const adaptiveIcon = core.getInput("adaptiveIcon");
const url = core.getInput("url");
export default ({ config }) => {
  return {
    ...config,
    name,
    slug,
    icon,
    splash: {
      ...config.splash,
      image,
    },
    android: {
      ...config.android,
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: adaptiveIcon,
      },
      package: bundleIdentifier,
    },
    ios: {
      ...config.ios,
      bundleIdentifier,
    },
    extra: {
      url,
    },
  };
};
