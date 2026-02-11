import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  function handleCheck(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isChecked: !task.isChecked };
        }
        return task;
      }),
    );
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleDelete(id) {
    console.log(id);
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div class="container">
      <Header tasks={tasks} />
      <AddTask setTasks={setTasks} tasks={tasks} />
      <TaskList onCheck={handleCheck} onDelete={handleDelete} tasks={tasks} />
    </div>
  );
}
