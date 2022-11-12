import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button,Alert } from "react-native";
import { NumberContainer, Card } from "../components";
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
 const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
   return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
const GameScreen = (props) => {
  console.log("userNumber game s", props.userChoice);
   const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, SetCurrentGuess] = useState(initialGuess);
  console.log("currentGuess", currentGuess);
  const CurrentLow =useRef(1)
  const CurrentHigh =useRef(100)
  const guessHanlder = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...",[{text:'Sorry',style:'cancel'}]);
      return 
    }
    if (direction ==='lower') {
      CurrentLow.current = currentGuess;
    }else{
      CurrentHigh.current = currentGuess;
    }
     const nextNumber = generateRandomBetween(
       CurrentLow.current,
       CurrentLow.current,
       currentGuess
     );
     SetCurrentGuess(nextNumber);
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer style={styles.number}>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="LOWER"
            onPress={() => {
              guessHanlder.bind(this, "lower");
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="GREATER"
            onPress={() => {
              guessHanlder.bind(this, "greater");
            }}
          />
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%",
    height: 100,
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    width: "80%",
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: 100,
    color: "#000",
    fontSize: "12px",
  },
  number:{
    // height:400
  }
});

export default GameScreen;
