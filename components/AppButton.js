import React from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";

export default function ({ title, onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: "#FF0067",
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}
