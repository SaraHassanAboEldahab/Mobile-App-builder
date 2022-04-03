import { WebView } from "react-native-webview";
const app = require("./app.json");

export default function App() {
  const uri = app.expo.uri;
  return <WebView source={{ uri }} />;
}
