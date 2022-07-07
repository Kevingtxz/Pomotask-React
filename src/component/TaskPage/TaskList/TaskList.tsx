import style from "./TaskList.module.css";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export default function TaskList(): JSX.Element {
  const listTask = useSelector(
    (state: RootState) => state.taskReducer.listTask
  );
  return (
    <ul className={style["list"]}>
      {listTask?.map((item, idx) => (
        <li key={idx}>
          <Task key={idx} task={item} />
        </li>
      ))}
    </ul>
  );
}
