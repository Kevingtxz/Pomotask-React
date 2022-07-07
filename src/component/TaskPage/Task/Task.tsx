import style from "./Task.module.css";
import { memo } from "react";
import TaskModel from "../../../model/task-model";
import { DAYS_MILLISECONDS as MILIS_TO_DAYS } from "../../../util/constants";
import IconBtn from "../IconBtn/IconBtn";
import { IconBtnEnum } from "../../../util/components-types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { taskSuccess, remove, taskSelect } from "../../../store/task-reducer";
import { RootState } from "../../../store/store";

type TaskProps = {
  task: TaskModel;
};

export default memo(function Task({ task }: TaskProps): JSX.Element {
  const dispatch = useDispatch();
  const isSelectId = useSelector(
    (state: RootState) => state.taskReducer.selectedTask?.id
  );
  const handlerSuccess = (): void => {
    dispatch(taskSuccess(task.id));
  };
  const handlerSelect = (): void => {
    dispatch(taskSelect(task.id));
  };
  const handlerRemove = (): void => {
    dispatch(remove(task.id));
  };

  return (
    <div
      className={`${style["task"]} ${
        isSelectId === task.id ? style["selected"] : ""
      }`}
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
          payload={{ handler: handlerSuccess }}
        />
        <IconBtn
          opt={IconBtnEnum.SELECT}
          payload={{ handler: handlerSelect }}
        />
        <IconBtn
          opt={IconBtnEnum.REMOVE}
          payload={{ handler: handlerRemove }}
        />
      </div>
    </div>
  );
});
