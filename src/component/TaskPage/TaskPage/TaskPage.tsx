import "./TaskPage.css";
import TaskList from "../TaskList/TaskList";

export default function TaskPage(): JSX.Element {
  return (
    <div className="task-page">
      <TaskList />
    </div>
  );
}
