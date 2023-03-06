import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Layout from "../components/Layout";

const TaskFormScreen = () => {
  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Escribe un titulo"
        placeholderTextColor="#546574"
      />
      <TextInput
        style={styles.input}
        placeholder="Escribe una descripcion"
        placeholderTextColor="#546574"
      />

      <TouchableOpacity>
        <text>Save Task</text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#10AC84",
    height: 35,
    color: "#FFFFFF",
    textAlign: "center",
    padding: 4,
    borderRadius: 5,
  },
});

export default TaskFormScreen;
