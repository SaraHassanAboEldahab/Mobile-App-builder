export default {
  name: process.env.appName,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || "1.0.0",
  icon: process.env.icon,
  ["splash.image"]: process.env.image,
  slug: process.env.bundleIdentifier,
  ["android.adaptiveIcon.foregroundImage"]: process.env.adaptiveIcon,
  ["android.package"]: `${process.env.bundleIdentifier}.App`,
  ["ios.bundleIdentifier"]: `${process.env.bundleIdentifier}.App`,
  extra: {
    url: process.env.url,
  },
};
