import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js'
import StartGameSceen from './screens/StartGameSceen.js'
export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      <StartGameSceen />
    </View>
  );
}

const styles = StyleSheet.create({
 
});
