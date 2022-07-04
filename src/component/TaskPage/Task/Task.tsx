import "./Task.css";
import { useContext } from "react";
import TaskContext from "../../../store/task/task-context";
import TaskModel from "../../../model/TaskModel";
import { MILIS_TO_DAYS_MULTIPLIER as MILIS_TO_DAYS } from "../../../utils/constants";
import IconBtn from "../../Common/IconBtn/IconBtn";
import { IconBtnEnum } from "../../../utils/components-types";
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

  const taskClassName = isSelect ? "task" : "task selected";

  return (
    <div className={taskClassName}>
      <h2 className="task-title task-heading">{task.title}</h2>
      <p className="task-text">
        {Math.floor(task.workedTimeMinutes / 60)} of {task.expectedTimeHours}h
      </p>
      <p className="task-text">
        {Math.floor(
          (task.deadline - Date.now() + MILIS_TO_DAYS) / MILIS_TO_DAYS
        )}
        d
      </p>
      <div className="task-btns">
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
