import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      // style={styles.container}
      source={{ uri: "https://store.arabhardware.net/en" }}
    />
    //   <Text>Hello from my first app!!</Text>
    //   <StatusBar style="auto" />
    // </WebView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "gray",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
