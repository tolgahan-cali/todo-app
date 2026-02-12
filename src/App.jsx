import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editingId, setEditingId] = useState(null);

  const sortedTasks = tasks
    .slice()
    .sort((a, b) => (a.isChecked === b.isChecked ? 0 : a.isChecked ? 1 : -1));

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
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleEdit(id, newText) {
    setTasks((tasks) =>
      tasks.map((prevTask) =>
        prevTask.id === id ? { ...prevTask, task: newText } : prevTask,
      ),
    );
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <Header tasks={tasks} />
      <AddTask setTasks={setTasks} tasks={tasks} />
      <TaskList tasks={tasks}>
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onCheck={handleCheck}
            onDelete={handleDelete}
            isEditing={editingId === task.id}
            setEditingId={setEditingId}
            onEdit={handleEdit}
          />
        ))}
      </TaskList>
    </div>
  );
}
