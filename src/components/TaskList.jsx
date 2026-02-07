import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList() {
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
  return (
    <ul class="task-list">
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </ul>
  );
}
