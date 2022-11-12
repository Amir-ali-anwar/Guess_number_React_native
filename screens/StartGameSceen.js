import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import colors from "../constants/colors";
import { Card, NumberContainer } from "../components";
const StartGameSceen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, Setconfirmed] = useState(false);
  const [selectedNumber, SetSelectedNumber] = useState("");
  const NumberInputHandler = (inputText) => {
    console.log("inputtext", inputText);
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };
  const confirmInputHandler = () => {
    console.log("confirm handler");
    const chooseNumber = parseInt(enteredValue);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
            onPress: SetSelectedNumber,
          },
        ]
      );
      return;
    }
    Setconfirmed(true);
    setEnteredValue("");
    SetSelectedNumber(chooseNumber);
  };
  let confirmedOutPut;
  if (confirmed) {
    confirmedOutPut = (
      <Card>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          color={colors.primary}
          title="Start Game"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }
  return (
    <View style={styles.screen}>
      {confirmedOutPut && confirmedOutPut}
      <Text style={styles.title}>StartGameSceen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredValue}
          onChangeText={NumberInputHandler}
          />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color={colors.accent}
              />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              onPress={confirmInputHandler}
              color={colors.primary}
              />
          </View>
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
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  button: {
    width: 100,
    color: "#000",
    fontSize: "12px",
  },
  buttonStyle: {
    backgroundColor: "red",
  },
  input: {
    width: 50,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default StartGameSceen;
