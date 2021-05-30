import React, {Component, useEffect} from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/screens/Navigation';
import SplashScreen from 'react-native-splash-screen';


class App extends Component {
  componentDidMount() { 
    setTimeout(() => {
        SplashScreen.hide();
    }, 500);
  }
  render(){
    return (
      <>
        <StatusBar />
        <Navigation />
      </>
    );
  }
}

export default App;