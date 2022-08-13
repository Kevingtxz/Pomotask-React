import style from "./StatusPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TaskModel from "../../model/task-model";
import BigTimerModel from "../../model/big-timer-model";

export default function StatusPage(): JSX.Element {
  const taskList: TaskModel[] = useSelector(
    (state: RootState) => state.taskReducer.taskList
  );
  const taskFinishedList: TaskModel[] = useSelector(
    (state: RootState) => state.historyReducer.taskFinishedList
  );
  const bigTimerFinishedList: BigTimerModel[] = useSelector(
    (state: RootState) => state.historyReducer.bigTimerFinishedList
  );
  const totalExpectedWork: number =
    taskList.length > 0
      ? taskList
          .map((item) => item.expectedTimeHrs)
          .reduce((sum, cur) => sum + cur)
      : 0;
  const totalWorkedTime: number =
    taskList.length > 0
      ? Math.floor(
          taskList
            .map((item) => item.workedTimeMin)
            .reduce((sum, cur) => sum + cur) / 60
        )
      : 0;
  const totalTaskFinished: number = taskFinishedList.length;
  const totalTaskSucceed: number = taskFinishedList.filter(
    (item) => item.successful
  ).length;

  const totalBigTimerFinished: number = bigTimerFinishedList.length;
  const totalBigTimerSucceed: number = bigTimerFinishedList.filter(
    (item) => item.successful
  ).length;

  return (
    <div className={style["status"]}>
      <h1 className={style["h1"]}>Total</h1>
      <div className={style["info-box"]}>
        <h5 className={style["info"]}>{totalExpectedWork}h expected</h5>
        <h5 className={style["info"]}>{totalWorkedTime}h worked</h5>
        <h5 className={style["info"]}>{totalTaskFinished} tasks ended</h5>
        <h5 className={style["info"]}>{totalTaskSucceed} tasks succeed</h5>
        <h5 className={style["info"]}>
          {totalBigTimerFinished} big timers ended
        </h5>
        <h5 className={style["info"]}>
          {totalBigTimerSucceed} big timers succeed
        </h5>
      </div>
    </div>
  );
}
