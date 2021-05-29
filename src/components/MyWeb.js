import React from 'react';
import {Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {roundToNearestPixel} from 'react-native/Libraries/Utilities/PixelRatio';

export default function MyWeb({route}) {
  const urlA = 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=264282133';
  const urlB = 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=109076104';
  let real;
  if (route.params.UID === 'userA') {
    real = urlA;
  } else {
    real = urlB;
  }
  return <WebView source={{uri: real}} />;
}
