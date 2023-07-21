import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [outputText,setOutputText] = useState(' Yeah this is your first react app! ')
  return (
  <View style={styles.container}>
 <Text>{outputText}</Text>
 <Button title="Change Text" onPress={() => setOutputText('The Text Changed!')}/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
  },
});
