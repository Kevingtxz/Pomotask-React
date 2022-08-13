import style from "./TaskSelect.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import TaskSelectCard from "../TaskSelectCard/TaskSelectCard";
import Task from "../../Task/Task";

export default function TaskSelect(): JSX.Element {
  const listTask = useSelector((state: RootState) =>
    state.taskReducer.taskList.slice(0, 2)
  );
  const selectedTask = useSelector((state: RootState) =>
    state.taskReducer.selectedTaskId
      ? state.taskReducer.taskList.find(
          (item) => item.id === state.taskReducer.selectedTaskId
        )
      : undefined
  );

  return (
    <ul className={style["task-select"]}>
      {(selectedTask && <Task task={selectedTask} />) ||
        listTask?.map((item, idx) => (
          <li key={idx}>
            <TaskSelectCard task={item} />
          </li>
        ))}
    </ul>
  );
}
