import { useState } from "react";

export default function AddTask({ setTasks, tasks }) {
  const [taskInput, setTaskInput] = useState("");

  async function handleAddTask(e) {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      task: taskInput,
      isChecked: false,
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    setTaskInput("");
  }

  return (
    <form onSubmit={handleAddTask} class="input-wrapper">
      <div class="input-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>

      <input
        type="text"
        class="todo-input"
        placeholder="Yeni bir görev ekle..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <button class="add-btn">Ekle</button>
    </form>
  );
}
