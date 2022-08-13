import style from "./Task.module.css";
import { memo } from "react";
import TaskModel from "../../../model/task-model";
import IconBtn, { IconBtnEnum } from "../IconBtn/IconBtn";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { taskAction } from "../../../store/reducer/task-reducer";
import { RootState } from "../../../store/store";
import TaskService from "../../../service/TaskService";

type TaskProps = {
  task: TaskModel;
};

export default memo(function Task({ task }: TaskProps): JSX.Element {
  const dispatch = useDispatch();
  const isSelectId = useSelector(
    (state: RootState) => state.taskReducer.selectedTaskId
  );
  const workedTimerHours = Math.floor(task.workedTimeMin / 60);
  const expectedTimeHrs = task.expectedTimeHrs;
  const daysLast = TaskService.findDaysLasting(task.deadline);
  const avgToFinishInTime = TaskService.findAvgTimeToFinish(
    task.expectedTimeHrs,
    task.workedTimeMin,
    task.deadline
  ).toFixed(1);

  const handlerSuccess = (): void => {
    dispatch(taskAction.successTask(task.id));
  };
  const handlerSelect = (): void => {
    dispatch(taskAction.selectTask(task.id));
  };
  const handlerRemove = (): void => {
    dispatch(taskAction.removeTask(task.id));
  };

  return (
    <div
      className={`${style["task"]} ${
        isSelectId === task.id ? style["selected"] : ""
      }`}
    >
      <h2 className={style["title"] + " " + style["heading"]}>
        {task.title.slice(0, 20)}
      </h2>
      <p className={style["text"]}>
        {workedTimerHours} of {expectedTimeHrs}h
      </p>
      <p className={style["text"]}>{daysLast}d last</p>
      <p className={style["text"]}>{avgToFinishInTime}h avg</p>
      <div className={style["btns"]}>
        <IconBtn
          type={IconBtnEnum.SUCCESS}
          payload={{ handler: handlerSuccess }}
        />
        <IconBtn type={IconBtnEnum.UPDATE} payload={{ id: task.id }} />
        <IconBtn
          type={IconBtnEnum.REMOVE}
          payload={{ handler: handlerRemove }}
        />
        <div></div>
        <IconBtn
          type={IconBtnEnum.SELECT}
          payload={{ handler: handlerSelect }}
        />
      </div>
    </div>
  );
});
