import "./TaskList.css";
import { useState } from "react";
import Task from "../Task/Task";
import TaskModel from "../../../model/TaskModel";
import TaskService from "../../../service/TaskService";

type TaskListProps = {
  initialTaskList?: TaskModel[];
};

export default function TaskList({
  initialTaskList = TaskService.getTaskList(),
}: TaskListProps): JSX.Element {
  const [taskList, setTaskList] = useState(initialTaskList);

  const filterTask = (id: number): void =>
    setTaskList((prevState) => prevState.filter((item) => item.id !== id));

  return (
    <ul className="task-list">
      {taskList.map((item) => (
        <Task key={item.id} task={item} onRemove={filterTask} />
      ))}
    </ul>
  );
}
