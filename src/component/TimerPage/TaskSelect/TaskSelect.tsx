import "./TaskSelect.css";
import { useContext } from "react";
import TaskContext from "../../../store/task/task-context";
import TaskSelectCard from "../TaskSelectedCard/TaskSelectCard";
import TimerContext from "../../../store/timer/timer-context";

export default function TaskSelect(): JSX.Element {
  const ctx = useContext(TimerContext);
  const ctxTask = useContext(TaskContext);
  if (ctx.service.getSelectedTask()) return <></>;

  const listQtd = ctxTask.service.getAllQtd(4);

  return (
    <ul className="task-select">
      {listQtd.map((item, idx) => (
        <li key={idx}>
          <TaskSelectCard task={item} />
        </li>
      ))}
    </ul>
  );
}
