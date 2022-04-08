import Constants from "expo-constants";
import { WebView } from "react-native-webview";

import { useNetInfo } from "@react-native-community/netinfo";
import { Image, StyleSheet, Text, View } from "react-native";

const App = () => {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/offline.png")} />
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  const uri = Constants?.manifest?.extra?.url;
  return <WebView source={{ uri }} />;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  image: {
    height: 500,
    width: 500,
  },
  text: {
    fontSize: 25,
  },
});

export default App;
