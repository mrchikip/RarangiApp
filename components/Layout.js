import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";

const layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#222F3E" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222F3E",
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
});

export default layout;
