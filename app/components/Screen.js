import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children }) => (
  <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "tomato",
  },
});

export default Screen;
