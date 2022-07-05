import style from "./TaskPage.module.css";
import TaskList from "../TaskList/TaskList";

export default function TaskPage(): JSX.Element {
  return (
    <div className={style["page"]}>
      <TaskList />
    </div>
  );
}
