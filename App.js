import { WebView } from "react-native-webview";
import * as core from "@actions/core";
import github from "@actions/github";

export default function App() {
  const uri = core.getInput("storeLink", { required: true });
  // const uri = "https://store.arabhardware.net/";
  return <WebView source={{ uri }} />;
}
