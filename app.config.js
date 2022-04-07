export default {
  name: process.env.appName,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || "1.0.0",
  extra: {
    bundleIdentifier: process.env.bundleIdentifier,
    package: process.env.bundleIdentifier + ".App",
  },
};
