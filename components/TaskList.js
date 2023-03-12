import React, { useEffect, useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";

import TaskItem from "./TaskItem";
import { deleteTask, getTasks } from "../api";
// import { RefreshControl } from "react-native-gesture-handler";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await loadTasks();
  };

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  });

  return (
    <FlatList
      style={{
        width: "100%",
      }}
      data={tasks}
      keyExtractor={(task) => task.id}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={["#78E08F"]}
          onRefresh={onRefresh}
          progressBackgroundColor="#0A3D62"
        />
      }
    />
  );
};

export default TaskList;
