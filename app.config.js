export default ({ config }) => {
  config.splash.image = process.env.image;
  config.android.adaptiveIcon.foregroundImage = process.env.adaptiveIcon;
  config.android.package = `${process.env.bundleIdentifier}.App`;
  config.iso.bundleIdentifier = `${process.env.bundleIdentifier}.App`;
  return {
    ...config,
    extra: {
      url: process.env.url,
    },
  };
};
