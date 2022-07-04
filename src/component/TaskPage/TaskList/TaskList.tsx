import "./TaskList.css";
import { useContext } from "react";
import TaskContext from "../../../store/task/task-context";
import Task from "../Task/Task";

export default function TaskList(): JSX.Element {
  const ctx = useContext(TaskContext);
  return (
    <ul className="task-list">
      {ctx.service.getAll().map((item, idx) => (
        <li key={idx}>
          <Task key={idx} task={item} />
        </li>
      ))}
    </ul>
  );
}
