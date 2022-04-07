import Constants from "expo-constants";
import { WebView } from "react-native-webview";
import appData from "./app-data.json";

Constants.manifest.extra.icon === process.env.icon;
Constants.manifest.extra.splash.image === process.env.plash;
Constants.manifest.extra.android.package === process.env.bundleIdentifier;
Constants.manifest.extra.ios.bundleIdentifier ===
  process.env.bundleIdentifier + ".APP";
Constants.manifest.extra.android.adaptiveIcon.foregroundImage ===
  process.env.adaptiveIcon;

export default function App() {
  const uri = appData?.url;
  return <WebView source={{ uri }} />;
}
