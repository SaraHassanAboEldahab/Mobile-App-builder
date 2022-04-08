import "dotenv/config";

const name = process.env.appName;
const slug = process.env.slug;
const icon = process.env.icon;
const image = process.env.image;
const bundleIdentifier = process.env.bundleIdentifier;
const adaptiveIcon = process.env.adaptiveIcon;
const url = process.env.url;

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
      ...config.extra,
      url,
    },
  };
};
