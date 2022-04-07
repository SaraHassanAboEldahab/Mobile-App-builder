import { WebView } from "react-native-webview";
import appData from "./app-data.json";

export default function App() {
  const uri = appData?.url;
  return <WebView source={{ uri }} />;
}
