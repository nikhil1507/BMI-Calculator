import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

export default function ({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
