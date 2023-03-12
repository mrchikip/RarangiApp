// Importar los componentes necesarios de React Native
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
// import { TouchableOpacity } from "react-native-web";

// Definir el componente taskItem que recibe como argumento un objeto de tarea
const taskItem = ({ task, handleDelete }) => {
  return (
    // Vista que contiene los elementos de texto para el título y descripción de la tarea
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <Text style={styles.itemTittle}>{task.tittle}</Text>
        <Text style={styles.itemTittle}>{task.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#EE5253", padding: 7, borderRadius: 5 }}
        // onPress={() => console.log(task.id)}
        onPress={() => handleDelete(task.id)}
      >
        <Text style={{ color: "#FFFFFF" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

// Definir los estilos para el componente
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333", // Color de fondo del contenedor
    padding: 20, // Espaciado interno de 20 puntos
    marginVertical: 8, // Espaciado vertical de 8 puntos
    borderRadius: 5, // Bordes redondeados con un radio de 5 puntos
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTittle: {
    color: "#FFFFFF", // Color de texto blanco
  },
});

// Exportar el componente taskItem
export default taskItem;
