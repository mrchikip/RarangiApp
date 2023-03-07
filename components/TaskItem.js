// Importar los componentes necesarios de React Native
import { View, Text, StyleSheet } from "react-native";
import React from "react";

// Definir el componente taskItem que recibe como argumento un objeto de tarea
const taskItem = ({ task }) => {
  return (
    // Vista que contiene los elementos de texto para el título y descripción de la tarea
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{task.tittle}</Text>
      <Text style={styles.itemTitle}>{task.description}</Text>
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
  },
  itemTitle: {
    color: "#FFFFFF", // Color de texto blanco
  },
});

// Exportar el componente taskItem
export default taskItem;
