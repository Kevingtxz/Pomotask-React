import style from "./TaskSelectCard.module.css";
import { useContext } from "react";
import TaskModel from "../../../model/TaskModel";
import TaskContext from "../../../store/task/task-context";
import TimerContext from "../../../store/timer/timer-context";

type TaskChoiceCardProps = {
  task: TaskModel;
};

export default function TaskChoiceCard({
  task,
}: TaskChoiceCardProps): JSX.Element {
  const ctx = useContext(TimerContext);
  const ctxTask = useContext(TaskContext);
  const handlerChoose = () => {
    ctx.dispatchSetSelectedTask(task);
    ctxTask.dispatchSetSelected(task.id);
  };

  return (
    <div className={style["card"]}>
      <button className={style["btn"]} onClick={handlerChoose}>
        <h2 className={style["title"]}>{task.title}</h2>
      </button>
    </div>
  );
}
