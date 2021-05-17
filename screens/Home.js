import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import AppView from "../components/AppView";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
import { set } from "react-native-reanimated";

export default function ({ navigation }) {
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(45);
  const [age, setAge] = useState(19);

  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  const handleCalculate = () => {
    const newHeight = height / 100;
    const BMI = weight / newHeight ** newHeight;
    return navigation.navigate("result", { result: BMI.toFixed(1) });
  };

  const handleMalePress = () => {
    setIsFemale(false);
    setIsMale(true);
  };
  const handleFemalePress = () => {
    setIsFemale(true);
    setIsMale(false);
  };

  return (
    <AppView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BMI Calculator</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={{ flex: 1, display: "flex", flexDirection: "row" }}>
          <Card
            name="male"
            title="MALE"
            onPress={handleMalePress}
            style={{ backgroundColor: isMale ? "#0D122C" : "#272A4C" }}
          />
          <Card
            name="female"
            title="FEMALE"
            onPress={handleFemalePress}
            style={{ backgroundColor: isMale ? "#272A4C" : "#0D122C" }}
          />
        </View>
        <Card
          height={height}
          title="HEIGHT"
          onValueChange={(height) => setHeight(Math.round(height))}
        />
        <View style={{ flex: 1, display: "flex", flexDirection: "row" }}>
          <Card
            toShowButtons={true}
            btnRight="add-sharp"
            btnLeft="remove-sharp"
            title="WEIGHT"
            weight={weight}
            onLeftPress={() =>
              weight <= 0 ? setWeight(0) : setWeight(weight - 1)
            }
            onRightPress={() => setWeight(weight + 1)}
          />
          <Card
            toShowButtons={true}
            btnRight="add-sharp"
            btnLeft="remove-sharp"
            title="AGE"
            age={age}
            onLeftPress={() => (age <= 0 ? setAge(0) : setAge(age - 1))}
            onRightPress={() => setAge(age + 1)}
          />
        </View>
      </View>
      <AppButton title="CALCULATE YOUR BMI" onPress={handleCalculate} />
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0A0D22",
  },
  cardContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    color: "white",
    flex: 1,
  },
  iconContainer: {
    backgroundColor: "#3B3B3B",
    height: 50,
    width: 50,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
