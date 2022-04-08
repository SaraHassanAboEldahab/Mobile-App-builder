require("dotenv").config();

export default ({ config }) => {
  return {
    ...config,
    name: process.env.appName,
    slug: process.env.slug,
    icon: process.env.icon,
    splash: {
      ...config.splash,
      image: process.env.image,
    },
    android: {
      ...config.android,
      package: `${process.env.bundleIdentifier}.App`,
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: process.env.adaptiveIcon,
      },
    },
    ios: {
      bundleIdentifier: `${process.env.bundleIdentifier}.App`,
    },
    extra: {
      url: process.env.url,
    },
  };
};
