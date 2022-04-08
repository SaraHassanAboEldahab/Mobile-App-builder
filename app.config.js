import "dotenv/config";

const name = process.env.APP_NAME;
const slug = process.env.SLUG;
const icon = process.env.ICON;
const splash = process.env.SPLASH;
const adaptiveIcon = process.env.ADAPTIVE_ICON;
const url = process.env.URL || "https://wuilt.com/";

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
    },
    extra: {
      url,
    },
  };
};
