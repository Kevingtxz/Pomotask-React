import style from "./TaskSelectCard.module.css";
import { memo } from "react";
import TaskModel from "../../../../model/task-model";
import { useDispatch } from "react-redux";
import { taskAction } from "../../../../store/reducer/task-reducer";

type TaskChoiceCardProps = {
  task: TaskModel;
};

export default memo(function TaskChoiceCard({
  task,
}: TaskChoiceCardProps): JSX.Element {
  const dispatch = useDispatch();
  const handlerChoose = () => {
    dispatch(taskAction.selectTask(task.id));
  };

  return (
    <div className={style["card"]}>
      <button className={style["btn"]} onClick={handlerChoose}>
        <h2 className={style["title"]}>{task.title}</h2>
      </button>
    </div>
  );
});
