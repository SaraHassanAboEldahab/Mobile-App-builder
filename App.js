import Constants from "expo-constants";
import { WebView } from "react-native-webview";
export default function App() {
  const uri = Constants.manifest.extra.url;
  return <WebView source={{ uri }} />;
}
