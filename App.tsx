import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'react-native-paper'

function mudacor() {
 const cores = ['green', 'dark', 'white', 'blue', 'green', 'red']
 const alecor = cores[Math.floor(Math.random() * cores.length)]
//  alecores = Math.floor(Math.random() * 13) + 349
  document.body.style.backgroundColor = `${alecor}`;
console.log(alecor)
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bom dia</Text>
      <StatusBar style="auto" />
       <button onClick={mudacor}>
    Press me
  </button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
