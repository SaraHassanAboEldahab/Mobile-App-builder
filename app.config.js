require("dotenv").config();

export default ({ config }) => {
  return {
    ...config,
    name: process.env.APPNAME,
    slug: process.env.SLUG,
    icon: process.env.ICON,
    splash: {
      ...config.splash,
      image: process.env.SPLASH,
    },
    android: {
      ...config.android,
      package: `${process.env.BUNDLEIDENTIFIER}.App`,
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: process.env.ADAPTIVEICON,
      },
    },
    ios: {
      bundleIdentifier: `${process.env.BUNDLEIDENTIFIER}.App`,
    },
    extra: {
      url: process.env.URL,
    },
  };
};
