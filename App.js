import { WebView } from "react-native-webview";
import * as core from "@actions/core";

export default function App() {
  const uri = core.getInput("storeLink");
  // const uri = "https://store.arabhardware.net/";
  return <WebView source={{ uri }} />;
}
