import "./TaskList.css";
import { useState } from "react";
import Task from "../Task/Task";
import TaskModel from "../../../model/TaskModel";
import TaskService from "../../../service/TaskService";

type TaskListProps = {
  initialTaskList?: TaskModel[];
  deleteTask?: (id: number) => void;
  updateSuccessfulTask?: (id: number) => void;
};

export default function TaskList({
  initialTaskList = TaskService.getTaskList(),
  deleteTask = TaskService.deleteTask,
  updateSuccessfulTask = TaskService.updateSuccessfulTask,
}: TaskListProps): JSX.Element {
  const [taskList, setTaskList] = useState(initialTaskList);

  const removeTask = (id: number) => {
    deleteTask(id);
    setTaskList((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <ul className="task-list">
      {taskList.map((item) => (
        <Task
          onSuccess={updateSuccessfulTask.bind(null, item.id)}
          onRemove={removeTask.bind(null, item.id)}
          key={item.id}
          task={item}
        />
      ))}
    </ul>
  );
}
