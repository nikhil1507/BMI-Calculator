import React from "react";
import { View, Text } from "react-native";
import AppView from "../components/AppView";
import AppButton from "../components/AppButton";

export default function ({ route, navigation }) {
  const { result } = route.params;
  return (
    <AppView style={{ backgroundColor: "#0A0D22" }}>
      <View
        style={{
          display: "flex",
          flex: 1,
          backgroundColor: "#1D1F33",
          borderRadius: 10,
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          margin: 10,
        }}
      >
        <Text style={{ fontSize: 55, color: "white", fontWeight: "700" }}>
          Your BMI
        </Text>
        <Text
          style={{
            fontSize: 35,
            color: "#22E17A",
          }}
        >
          {result < 18.5
            ? "UNDERWEIGHT"
            : result >= 18.5 && result < 24.9
            ? "NORMAL"
            : "OVERWEIGHT"}
        </Text>
        <Text style={{ fontSize: 95, color: "white", fontWeight: "700" }}>
          {result}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {result < 18.5 ? (
            <>
              <Text style={{ color: "white", fontSize: 30 }}>
                You have a lesser BMI
              </Text>
              <Text style={{ color: "white", fontSize: 30 }}>Eat More</Text>
            </>
          ) : result >= 18.5 && result < 24.9 ? (
            <>
              <Text style={{ color: "white", fontSize: 30 }}>
                You have a normal BMI
              </Text>
              <Text style={{ color: "white", fontSize: 30 }}>Good Job</Text>
            </>
          ) : (
            <>
              <Text style={{ color: "white", fontSize: 30 }}>
                You have a higher BMI
              </Text>
              <Text style={{ color: "white", fontSize: 30 }}>Work Hard</Text>
            </>
          )}
        </View>
      </View>
      <AppButton
        title="CALCULATE AGAIN"
        onPress={() => navigation.navigate("home")}
      />
    </AppView>
  );
}

//BMI	Weight Status
// Below 18.5	Underweight
// 18.5 – 24.9	Normal or Healthy Weight
// 25.0 – 29.9	Overweight
