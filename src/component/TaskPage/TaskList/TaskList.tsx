import style from "./TaskList.module.css";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export default function TaskList(): JSX.Element {
  const taskList = useSelector(
    (state: RootState) => state.taskReducer.taskList
  );

  return (
    <ul className={style["list"]}>
      {taskList?.slice(0, 21).map((item, idx) => (
        <li className={style["items"]} key={idx}>
          <Task key={idx} task={item} />
        </li>
      ))}
    </ul>
  );
}
