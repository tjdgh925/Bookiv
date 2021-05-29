import React from 'react';
import {WebView} from 'react-native-webview';

export default function MyWeb() {
  return (
    <WebView source={{uri: 'https://logrocket.com/'}} style={{marginTop: 20}} />
  );
}
