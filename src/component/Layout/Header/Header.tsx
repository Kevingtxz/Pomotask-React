import style from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header className={style["header"]}>
      <Link to="/" className={style["logo"] + " " + style["link-item"]}>
        PomoTask
      </Link>

      <nav className={style["nav"]}>
        <Link to="/" className={style["link-item"]}>
          Home
        </Link>
        <Link to="/tasks" className={style["link-item"]}>
          Task
        </Link>
        <Link to="/history" className={style["link-item"]}>
          History
        </Link>
        <Link to="/status" className={style["link-item"]}>
          Status
        </Link>
      </nav>
    </header>
  );
}
