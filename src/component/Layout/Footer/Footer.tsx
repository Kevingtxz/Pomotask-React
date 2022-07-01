import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer-copyright-box">
        <h5 className="footer-logo">POMOTASK</h5>

        <p className="footer-copyright">
          Copyright &copy; 2022 by Pomotask, Inc. All rights reserved.
        </p>
      </div>
      <div className="footer-navs">
        <nav className="footer-nav-col">
          <p className="footer-heading">GitHub Projet</p>
          <ul className="footer-list">
            <li>
              <a
                href="https://github.com/Kevingtxz/Pomotask-React"
                className="footer-link footer-project"
                target="_blank"
                rel="noreferrer"
              >
                PomoTask React
              </a>
            </li>
            <li>
              <a
                className="footer-link footer-project"
                href="https://github.com/Kevingtxz/Pomotasks-Spring"
                target="_blank"
                rel="noreferrer"
              >
                PomoTask Spring
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav-col">
          <p className="footer-heading">Info</p>
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link to="about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <a
                className="footer-link"
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
