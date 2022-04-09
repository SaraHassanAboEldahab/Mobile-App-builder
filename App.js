import Constants from "expo-constants";
import React, { useRef } from "react";
import { WebView, WebViewNavigation } from "react-native-webview";
import CookieManager from "@react-native-community/react-native-cookies";

const App = () => {
  const webViewRef = useRef();
  const uri = Constants.manifest.extra.url;

  // Send the cookie information back to the mobile app
  const CHECK_COOKIE = `
ReactNativeWebView.postMessage("Cookie: " + document.cookie);
true;
`;
  const onNavigationStateChange = (navigationState) => {
    // Check cookies every time URL changes
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(CHECK_COOKIE);
    }
  };

  const onMessage = (event) => {
    const { data } = event.nativeEvent;

    if (data.includes("Cookie:")) {
      // process the cookies
      CookieManager.get(uri, true);
    }
  };

  return (
    <WebView
      source={{ uri }}
      ref={webViewRef}
      onNavigationStateChange={onNavigationStateChange}
      onMessage={onMessage}
      sharedCookiesEnabled
    />
  );
};

export default App;
