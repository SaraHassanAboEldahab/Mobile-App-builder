export default {
  name: process.env.appName,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || "1.0.0",
  extra: {
    icon: process.env.icon,
    image: process.env.image,
    foregroundImage: process.env.adaptiveIcon,
    slug: process.env.bundleIdentifier,
    package: `${process.env.bundleIdentifier}.App`,
    bundleIdentifier: `${process.env.bundleIdentifier}.App`,
  },
};
