import style from "./IconBtn.module.css";
import { Link } from "react-router-dom";
import { IconBtnEnum, IconBtnProps } from "../../../../util/components-types";

export default function IconBtn({ opt, params }: IconBtnProps): JSX.Element {
  switch (opt) {
    case IconBtnEnum.SELECT:
      return (
        <Link onClick={params.handler} to={"/"} className={style["btn"]}>
          <svg
            className={style["icon"]}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
      );
    case IconBtnEnum.SUCCESS:
      return (
        <button onClick={params.handler} className={style["btn"]}>
          <svg
            className={style["icon"]}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </button>
      );
    case IconBtnEnum.STATIC:
      return (
        <button onClick={params.handler} className={style["btn"]}>
          <svg
            className={style["icon"]}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
      );
    case IconBtnEnum.UPDATE:
      return (
        <Link to={`/tasks/form/${params.id}`} className={style["btn"]}>
          <svg
            className={style["icon"]}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </Link>
      );
    case IconBtnEnum.REMOVE:
      return (
        <button onClick={params.handler} className={style["btn"]}>
          <svg
            className={style["icon"]}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      );
    case IconBtnEnum.FAIL:
      return (
        <button onClick={params.handler} className={style["btn"]}>
          <svg
            className={style["icon"]}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        </button>
      );
  }
}
