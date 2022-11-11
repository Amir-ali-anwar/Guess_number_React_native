import React from "react";
import { View, Text, StyleSheet } from "react-native";
const StartGameSceen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>StartGameSceen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
});
export default StartGameSceen;
