import { NetworkProvider } from "react-native-offline";
import App from "./App";

const Root = () => (
  <NetworkProvider>
    <App />
  </NetworkProvider>
);

export default Root;
