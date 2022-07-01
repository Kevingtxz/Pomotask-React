import "./Task.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import TaskService from "../../../service/TaskService";
import TaskModel from "../../../model/TaskModel";

type TaskProps = {
  task?: TaskModel;
  onSuccess?: (id: number) => void;
  onRemove?: (id: number) => void;
};

export default function Task({
  task = {
    id: 0,
    title: "Default",
    priorityLevel: 1,
    healthLevel: 1,
    expectedTimeHours: 0,
    needFocus: false,
    deadline: 0,
    workedTimeMinutes: 0,
    successful: false,
    createdAt: new Date(),
  },
  onSuccess,
  onRemove,
}: TaskProps): JSX.Element {
  const [successful, setSucessful] = useState(task.successful);

  const handlerSuccess = () => {
    const id = task.id;
    TaskService.updateSuccessfulTask(id);
    setSucessful(!successful);
    if (onSuccess) onSuccess(id);
  };

  const handlerRemove = () => {
    const id = task.id;
    TaskService.deleteTask(id);
    if (onRemove) onRemove(id);
  };

  const taskClass = successful === false ? "task " : "task success";

  return (
    <li className={taskClass}>
      <h2 className="task-title task-heading">{task.title}</h2>
      <p className="task-text">
        {Math.floor(task.workedTimeMinutes / 60)} of {task.expectedTimeHours}h
      </p>
      {typeof task.deadline === "number" && (
        <p className="task-text">{task.deadline}d</p>
      )}

      <div className="task-btns">
        <button onClick={handlerSuccess} className="task-btn">
          <svg
            className="task-check-icon task-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </button>
        <Link to={`/tasks/form/${task.id}`} className="task-btn">
          <svg
            className="task-pencil-alt-icon task-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </Link>
        <button onClick={handlerRemove} className="task-btn">
          <svg
            className="task-delete-icon task-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </li>
  );
}
