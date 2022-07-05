import style from "./Task.module.css";
import { useContext } from "react";
import TaskContext from "../../../store/task/task-context";
import TaskModel from "../../../model/TaskModel";
import { MILIS_TO_DAYS_MULTIPLIER as MILIS_TO_DAYS } from "../../../util/constants";
import IconBtn from "./IconBtn/IconBtn";
import { IconBtnEnum } from "../../../util/components-types";
import TimerContext from "../../../store/timer/timer-context";

type TaskProps = {
  task: TaskModel;
};

export default function Task({ task }: TaskProps): JSX.Element {
  const ctx = useContext(TaskContext);
  const ctxTimer = useContext(TimerContext);
  const isSelect = ctx.service.isSelected(task);
  const handlerSuccess = (): void => ctx.dispatchSetSuccessful(task.id);
  const handlerSelect = (): void => {
    ctx.dispatchSetSelected(task.id);
    ctxTimer.dispatchSetSelectedTask(task);
  };
  const handlerRemove = (): void => ctx.dispatchRemoveItem(task.id);

  return (
    <div
      className={
        isSelect ? style["task"] : style["task"] + " " + style["selected"]
      }
    >
      <h2 className={style["title"] + " " + style["heading"]}>{task.title}</h2>
      <p className={style["text"]}>
        {Math.floor(task.workedTimeMinutes / 60)} of {task.expectedTimeHours}h
      </p>
      <p className={style["text"]}>
        {Math.floor(
          (task.deadline - Date.now() + MILIS_TO_DAYS) / MILIS_TO_DAYS
        )}
        d
      </p>
      <div className={style["btns"]}>
        <IconBtn
          opt={IconBtnEnum.SUCCESS}
          params={{ handler: handlerSuccess }}
        />
        <IconBtn opt={IconBtnEnum.SELECT} params={{ handler: handlerSelect }} />
        <IconBtn opt={IconBtnEnum.REMOVE} params={{ handler: handlerRemove }} />
      </div>
    </div>
  );
}
