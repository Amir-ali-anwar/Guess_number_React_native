import React from "react";
import Colors from "../constants/colors";
import { View, Text, StyleSheet } from "react-native";
const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    height:50
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
    height:35
  },
});
export default NumberContainer;
