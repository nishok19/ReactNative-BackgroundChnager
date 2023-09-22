/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState("#ffffff");


  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
      
    }
    console.log(color)
    setRandomBackground(color)
  }

  return (
    <SafeAreaView style={[styles.appContainer, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.container}>
            <Text style={styles.btn}>Change Background</Text>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    // height: '100%',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#333333',
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 26,
    backgroundColor: '#34495e',
    height: 46,
    color: '#ffffff'
    // width: 40
  }

  
});

export default App;
