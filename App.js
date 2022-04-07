import { WebView } from "react-native-webview";
import appData from "./app.json";

export default function App() {
  const uri = appData?.expo?.url;
  return <WebView source={{ uri }} />;
}
