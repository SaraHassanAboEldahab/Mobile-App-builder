const core = require("@actions/core");
import { WebView } from "react-native-webview";

export default function App() {
  const uri = core.getInput("url", { required: true });
  return <WebView source={{ uri }} />;
}
