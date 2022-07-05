import style from "./Timer.module.css";
import { useContext } from "react";
import TimerContext from "../../../store/timer/timer-context";

export default function Timer(): JSX.Element {
  const ctx = useContext(TimerContext);
  const time = ctx.service.getCurrentTime();
  const counter = ctx.service.getCounter();

  return (
    <div className={style["timer"]}>
      <span className={style["digits"]}>
        {("0" + Math.floor((time / 3600) % 60)).slice(-2)}:
      </span>
      <span className={style["digits"]}>
        {("0" + Math.floor((time / 60) % 60)).slice(-2)}:
      </span>
      <span className={style["digits"]}>
        {("0" + Math.floor(time % 60)).slice(-2)}
      </span>
      <span className={style["counter"]}>{counter}</span>
    </div>
  );
}
