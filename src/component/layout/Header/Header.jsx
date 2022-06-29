import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo header-link-item">
        PomoTask
      </Link>

      <nav className="header-nav">
        <Link to="/" className="header-link-item">
          Home
        </Link>
        <Link to="/tasks" className="header-link-item">
          Task
        </Link>
        {/* <Link to="/statics" className="header-link-item">
        Static
      </Link>
      <Link to="/settings" className="header-link-item">
        Setting
      </Link> */}
        <Link to="/logout" className="header-link-item">
          Logout
        </Link>
      </nav>
    </header>
  );
}
