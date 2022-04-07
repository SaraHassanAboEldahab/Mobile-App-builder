export default {
  name: process.env.appName,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || "1.0.0",
  icon: process.env.icon,
  image: process.env.image,
  foregroundImage: process.env.adaptiveIcon,
  slug: process.env.bundleIdentifier,
  "android.package": `${process.env.bundleIdentifier}.App`,
  "ios.bundleIdentifier": `${process.env.bundleIdentifier}.App`,
  extra: {
    url: process.env.url,
  },
};
