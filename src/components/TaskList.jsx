import TaskItem from "./TaskItem";

export default function TaskList({ children }) {
  return <ul className="task-list">{children}</ul>;
}
