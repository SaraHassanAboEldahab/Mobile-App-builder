import { WebView } from "react-native-webview";

export default function App() {
  const uri = "https://store.arabhardware.net/";
  return <WebView source={{ uri }} />;
}
