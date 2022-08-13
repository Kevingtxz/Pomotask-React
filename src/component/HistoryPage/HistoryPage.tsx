import style from "./HistoryPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Task from "../TaskPage/Task/Task";

export default function HistoryPage(): JSX.Element {
  const finishedTaskList = useSelector(
    (state: RootState) => state.historyReducer.taskFinishedList
  );

  return (
    <div className={style["history"]}>
      {finishedTaskList?.map((item, idx) => (
        <li className={style["items"]} key={idx}>
          <Task key={idx} task={item} />
        </li>
      ))}
    </div>
  );
}
