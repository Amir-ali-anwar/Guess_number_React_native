import React from 'react'
import colors from "../constants/colors";
import { BodyText, TitleText } from "../components";
import { View, Text, StyleSheet, Button, Image } from "react-native";
const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          resizeMode="contain"
        />
      </View>
      <BodyText>Number of rounds:{props.roundsNumber}</BodyText>
      <BodyText>Number Was:{props.userNumber}</BodyText>
      <Button title="NEW Game" onPress={onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
});
export default GameOver