import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer(): JSX.Element {
  return (
    <footer className={style["footer"]}>
      <div className={style["copyright-box"]}>
        <h5 className={style["logo"]}>POMOTASK</h5>

        <p className={style["copyright"]}>
          Copyright &copy; 2022 by Pomotask, Inc. All rights reserved.
        </p>
      </div>
      <div className={style["navs"]}>
        <nav className={style["nav-col"]}>
          <p className={style["heading"]}>GitHub Projet</p>
          <ul className={style["list"]}>
            <li className={style["list-item"]}>
              <a
                href="https://github.com/Kevingtxz/Pomotask-React"
                className={style["link"]}
                target="_blank"
                rel="noreferrer"
              >
                PomoTask React
              </a>
            </li>
            <li className={style["list-item"]}>
              <a
                className={style["link"]}
                href="https://github.com/Kevingtxz/Pomotasks-Spring"
                target="_blank"
                rel="noreferrer"
              >
                PomoTask Spring
              </a>
            </li>
          </ul>
        </nav>
        <nav className={style["nav-col"]}>
          <p className={style["heading"]}>Info</p>
          <ul className={style["list"]}>
            <li className={style["list-item"]}>
              <Link to="about" className={style["link"]}>
                About Us
              </Link>
            </li>
            <li className={style["list-item"]}>
              <a
                className={style["link"]}
                href="mailto:pomotask@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                pomotask@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
