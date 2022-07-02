import "./TaskList.css";
import { useContext } from "react";
import TaskListContext from "../../../store/task/task-list-context";
import Task from "../Task/Task";

export default function TaskList(): JSX.Element {
  const taskCtx = useContext(TaskListContext);
  const onRemove = (id: number): void => taskCtx.dispatchRemoveItem(id);

  return (
    <ul className="task-list">
      {taskCtx.list.map((item) => (
        <Task key={item.id} task={item} onRemove={onRemove} />
      ))}
    </ul>
  );
}
