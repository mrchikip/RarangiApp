import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { saveTask } from "../api";

const TaskFormScreen = ({ navigation }) => {
  const [task, setTask] = useState({
    tittle: "",
    description: "",
  });

  const handleChange = (name, value) => setTask({ ...task, [name]: value });

  const handleSubmit = () => {
    saveTask(task);
    navigation.navigate("HomeScreen");
  };

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Escribe un titulo"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("tittle", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Escribe una descripcion"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("description", text)}
      />

      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <text style={styles.buttonText}>Save Task</text>
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
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#10AC84",
    width: "90%",
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default TaskFormScreen;
