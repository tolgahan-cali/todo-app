import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div class="container">
      <Header />
      <AddTask />
      <TaskList />
    </div>
  );
}
