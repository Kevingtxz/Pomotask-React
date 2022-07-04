import { useContext } from "react";
import TaskModel from "../../../model/TaskModel";
import TaskContext from "../../../store/task/task-context";
import TimerContext from "../../../store/timer/timer-context";
import "./TaskSelectCard.css";

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
    <div className="task-choice-card">
      <h2 className="task-choice-title">{task.title}</h2>
      <button onClick={handlerChoose} className="task-choice-btn">
        <svg
          className="task-choice-check-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
  );
}
