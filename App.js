import Constants from "expo-constants";
import { WebView } from "react-native-webview";
import { Image, StyleSheet, Text, View, NetInfo } from "react-native";

const App = () => {
  const uri = Constants?.manifest?.extra?.url;
  return (
    <WebView
      source={{ uri }}
      renderError={() => (
        <View>
          <Image
            style={styles.image}
            source={require("./assets/offline.png")}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
});

export default App;
