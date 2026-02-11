import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onCheck, onDelete }) {
  const sortedTasks = [...tasks].sort((a, b) =>
    a.isChecked === b.isChecked ? 0 : a.isChecked ? 1 : -1,
  );
  return (
    <ul class="task-list">
      {sortedTasks.map((task) => {
        return (
          <TaskItem
            onDelete={onDelete}
            onCheck={onCheck}
            key={task.id}
            task={task}
          />
        );
      })}
    </ul>
  );
}
