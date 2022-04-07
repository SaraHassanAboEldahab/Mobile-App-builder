export default {
  name: process.env.appName,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || "1.0.0",
  icon: process.env.icon,
  image: process.env.image,
  slug: process.env.bundleIdentifier,
  foregroundImage: process.env.adaptiveIcon,
  package: `${process.env.bundleIdentifier}.App`,
  bundleIdentifier: `${process.env.bundleIdentifier}.App`,
  extra: {
    url: process.env.url,
  },
};
