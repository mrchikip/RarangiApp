import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getTasks } from "../api";

import Layout from "../components/Layout";
import TaskList from "../components/TaskList";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <Layout>
      <TaskList tasks={tasks} />
    </Layout>
  );
};

export default HomeScreen;
