import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { Header } from "./components/Header";
import { useState } from "react";

export default function App() {
  const initialTasks = [
    {
      id: 1,
      task: "BUGÜN OKULA GİT",
      isChecked: false,
    },
    {
      id: 2,
      task: "EVRAKLARI TESLİM ET",
      isChecked: false,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

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
