import React from 'react'
import { View, StyleSheet } from "react-native";
const BodyText = (props) => {
  return (
    <View style={styles.body}>{props.chidren}</View>
  )
}
const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});
export default BodyText