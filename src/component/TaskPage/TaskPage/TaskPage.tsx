import style from "./TaskPage.module.css";
import TaskList from "../TaskList/TaskList";
import { Link } from "react-router-dom";

export default function TaskPage(): JSX.Element {
  return (
    <div className={style["page"]}>
      <TaskList />
      <Link className={style["add"]} to="form">
        +
      </Link>
    </div>
  );
}
