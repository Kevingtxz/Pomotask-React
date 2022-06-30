import "./Task.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import TaskService from "../../../service/TaskService";

const Task = (props) => {
  const task = props.task;
  const [successful, setSucessful] = useState(task.successful);

  const handlerSuccess = () => {
    setSucessful(!successful);
    props.handlerSuccess(task.id);
  };

  const taskClass = successful === false ? "task " : "task success";

  return (
    <li className={taskClass}>
      <h2 className="task-title task-heading">{task.title}</h2>
      <p className="task-text">
        {task.workedTime} of {task.expectedTime}m
      </p>
      <p className="task-text">{task.deadline}d</p>

      <div className="task-btns">
        <a onClick={handlerSuccess} className="task-btn">
          <svg
            className="task-check-icon task-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </a>
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
        <a onClick={props.handlerRemove} className="task-btn">
          <svg
            className="task-delete-icon task-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </a>
      </div>
    </li>
  );
};
Task.defaultProps = {
  task: {
    id: 0,
    title: "Default",
    priority: -1,
    expectedTime: 0,
    isHard: false,
    deadline: 0,
    workedTime: 0,
    successful: false,
  },
  handlerSuccess: TaskService.updateSuccessfulTask,
  handlerRemove: TaskService.deleteTask,
};
Task.propTypes = {};

export default Task;
