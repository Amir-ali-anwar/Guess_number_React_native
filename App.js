import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js'
import { StartGameSceen, GameScreen } from "./screens/";
export default function App() {
  const [userNumber,SetUserNumber]=useState()
  const startHanlder=(selectNumber)=>{
    SetUserNumber(selectNumber)
  }
  let componentContent = <StartGameSceen onStartGame={startHanlder} />;
  if(userNumber){
    componentContent = <GameScreen userChoice={userNumber} />;
  }
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      {componentContent}
    </View>
  );
}

const styles = StyleSheet.create({
 
});
