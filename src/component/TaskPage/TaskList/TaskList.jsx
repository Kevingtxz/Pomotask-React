import "./TaskList.css";
import { useState } from "react";
import Task from "../Task/Task";

export default function TaskList(props) {
  const [taskList, setTaskList] = useState(props.taskList);

  const deleteTask = (id) => {
    props.deleteTask(id);
    setTaskList((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <>
      <ul className="task-list">
        {taskList.map((item) => (
          <Task
            handlerSuccess={props.updateSuccessfulTask.bind(null, item.id)}
            handlerRemove={deleteTask.bind(null, item.id)}
            key={item.id}
            task={item}
          />
        ))}
      </ul>
    </>
  );
}
TaskList.defaultProps = {
  taskList: [],
};
