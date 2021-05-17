import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Button from "./Button";
import Slider from "@react-native-community/slider";

export default function ({
  title,
  toShowButtons,
  btnLeft,
  btnRight,
  name,
  weight,
  age,
  height,
  onValueChange,
  style,
  onLeftPress,
  onRightPress,
  onPress,
  // isMale,isFemale
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: "#272A4C" }, style]}>
        {name ? <Ionicons name={name} size={80} color="white" /> : null}
        <Text style={styles.text}>{title}</Text>
        {weight ? (
          <Text style={{ fontSize: 50, color: "white" }}>{weight}</Text>
        ) : null}
        {age ? (
          <Text style={{ fontSize: 50, color: "white" }}>{age}</Text>
        ) : null}
        {height ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontSize: 80, color: "white" }}>{height}</Text>
            <Text
              style={{
                fontSize: 35,
                color: "white",
                marginLeft: 5,
                marginBottom: 15,
              }}
            >
              cm
            </Text>
          </View>
        ) : null}
        {height ? (
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={150}
            maximumValue={250}
            minimumTrackTintColor="#E8E9EC"
            maximumTrackTintColor="#ACADBB"
            thumbTintColor="#FF0167"
            onValueChange={onValueChange}
          />
        ) : null}

        {toShowButtons ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              padding: 5,
            }}
          >
            <Button onPress={onLeftPress} name={btnLeft} />
            <Button onPress={onRightPress} name={btnRight} />
          </View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    borderRadius: 10,
    margin: 5,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});
