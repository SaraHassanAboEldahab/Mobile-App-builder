import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return <WebView source={{ uri: "https://store.arabhardware.net/en" }} />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "gray",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
