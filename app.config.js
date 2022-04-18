import "dotenv/config";

const name = process.env.APP_NAME;
const slug = process.env.SLUG;
const icon = process.env.ICON;
const splash = process.env.SPLASH;
const adaptiveIcon = process.env.ADAPTIVE_ICON;
const bundleIdentifier = process.env.BUNDLE_IDENTIFIER;
const url = process.env.URL;

export default ({ config }) => {
  return {
    ...config,
    name,
    slug,
    icon,
    splash: {
      ...config.splash,
      image: splash,
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
