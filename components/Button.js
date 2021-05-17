import React from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ({ name, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name={name} color="white" size={40} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#222747",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    elevation: 10,
  },
});
