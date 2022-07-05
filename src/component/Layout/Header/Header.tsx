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
        {/* <Link to="/statics" className={style["link-item"]}>
        Static
      </Link>
      <Link to="/settings" className={style["link-item"]}>
        Setting
      </Link> */}
        <Link to="/logout" className={style["link-item"]}>
          Logout
        </Link>
      </nav>
    </header>
  );
}
