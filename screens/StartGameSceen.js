import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
const StartGameSceen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed,Setconfirmed]=useState(false);
  const [selectedNumber,SetSelectedNumber]=useState('')
  const NumberInputHanlder=(inputText)=>{
  setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  }
  const resetInputHandler = () => {
    setEnteredValue('');
  };
   const confirmInputHandler = () => {
    const chooseNumber= parseInt(enteredValue)
    if(chooseNumber ===NaN || chooseNumber<=0 ||chooseNumber>99){
      return 
    }
     Setconfirmed(true);
     setEnteredValue("");
     SetSelectedNumber(chooseNumber);
   };
   let confirmedOutPut;
   if (confirmed) {
     confirmedOutPut = <View>Choose Number:{selectedNumber}</View>;
   }
  return (
    //  <TouchableWithoutFeedback>
    <View style={styles.screen}>
      <Text style={styles.title}>StartGameSceen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredValue}
          onChangeText={NumberInputHanlder}
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
    //  </TouchableWithoutFeedback>
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
    marginTop:20
  },
  button: {
    width:100,
    color: "#000",
    fontSize: "12px",
  },
  buttonStyle:{
    backgroundColor:'red'
  }
  ,
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default StartGameSceen;
