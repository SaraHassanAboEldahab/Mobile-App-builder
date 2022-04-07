import Constants from "expo-constants";
Constants.manifest.extra.icon === process.env.icon;
Constants.manifest.extra.splash.image === process.env.plash;
Constants.manifest.extra.android.package ===
  process.env.bundleIdentifier + ".APP";
Constants.manifest.extra.ios.bundleIdentifier ===
  process.env.bundleIdentifier + ".APP";
Constants.manifest.extra.android.adaptiveIcon.foregroundImage ===
  process.env.adaptiveIcon;

export default {
  name: process.env.appName,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || "1.0.0",
};
