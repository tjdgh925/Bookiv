import React from 'react';
import {WebView} from 'react-native-webview';

export default function MyWeb() {
  return (
    <WebView
      source={{
        uri: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=264282133',
      }}
      style={{marginTop: 20}}
    />
  );
}
