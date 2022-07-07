import style from "./TaskSelect.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import TaskSelectCard from "../../TaskSelect/TaskSelectCard/TaskSelectCard";

export default function TaskSelect(): JSX.Element {
  const listTask = useSelector((state: RootState) =>
    state.taskReducer.listTask.slice(0, 4)
  );
  if (useSelector((state: RootState) => state.taskReducer.selectedTask))
    return <></>;

  return (
    <ul className={style["task-select"]}>
      {listTask?.map((item, idx) => (
        <li key={idx}>
          <TaskSelectCard task={item} />
        </li>
      ))}
    </ul>
  );
}
