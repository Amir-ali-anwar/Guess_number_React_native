import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js'
import { StartGameSceen, GameScreen, GameOver } from "./screens/";
export default function App() {
  const [userNumber,SetUserNumber]=useState()
  const [guessRounds,SetGuessRounds]=useState(0)
  const startHanlder=(selectNumber)=>{
    SetUserNumber(selectNumber)
  }
  const GaneOverHandler=(numberofRounds)=>{
    SetGuessRounds(numberofRounds);
  }
  let componentContent = <StartGameSceen onStartGame={startHanlder} />;
  if(userNumber && guessRounds <=0){
    componentContent = (<GameScreen userChoice={userNumber} onGameOver={GaneOverHandler} />);
  }else if (guessRounds) {
    <GameOver />
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
