import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import TaskItem from "./TaskItem";
import { getTasks } from "../api";
import { RefreshControl } from "react-native-gesture-handler";

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

  const renderItem = ({ item }) => {
    return <TaskItem task={item} />;
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
