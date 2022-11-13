import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header.js";
import { StartGameSceen, GameScreen, GameOver } from "./screens/";
import * as Font from "expo-font";
import { AppLoading } from "expo";
export default function App() {
  const [userNumber, SetUserNumber] = useState();
  const [guessRounds, SetGuessRounds] = useState(0);
  const [Apploading, SetAppLoasding] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
  };
  if(!Apploading){
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => SetAppLoasding(true)}
      onError={(err) => console.log(err)}
    />;
  }
  const startHanlder = (selectNumber) => {
    SetUserNumber(selectNumber);
  };
  const GaneOverHandler = (numberofRounds) => {
    SetGuessRounds(numberofRounds);
  };
  const configureNewGameHanlder = () => {
    SetGuessRounds(0);
    SetUserNumber(null);
  };
  let componentContent = <StartGameSceen onStartGame={startHanlder} />;
  if (userNumber && guessRounds <= 0) {
    componentContent = (
      <GameScreen userChoice={userNumber} onGameOver={GaneOverHandler} />
    );
  } else if (guessRounds) {
    <GameOver
      userNumber={userNumber}
      roundsNumber={guessRounds}
      onRestart={configureNewGameHanlder}
    />;
  }
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      {componentContent}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
