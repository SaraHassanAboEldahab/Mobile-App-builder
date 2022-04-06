import { WebView } from "react-native-webview";
import core from "@actions/core";

export default function App() {
  const uri = core.getInput("storeLink", { required: true });
  // const uri = "https://store.arabhardware.net/";
  return <WebView source={{ uri }} />;
}
