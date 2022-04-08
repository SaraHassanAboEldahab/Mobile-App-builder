const core = require("@actions/core");
const name = core.getInput("appName", { required: true });
const slug = core.getInput("slug", { required: true });
const icon = core.getInput("icon", { required: true });
const image = core.getInput("image", { required: true });
const bundleIdentifier = core.getInput("bundleIdentifier", { required: true });
const adaptiveIcon = core.getInput("adaptiveIcon", { required: true });
const url = core.getInput("url", { required: true });
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
      package: `${bundleIdentifier}.App`,
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: adaptiveIcon,
      },
    },
    ios: {
      bundleIdentifier: `${bundleIdentifier}.App`,
    },
    extra: {
      url,
    },
  };
};
