import { useContext } from "react";
import TimerContext from "../../../store/timer/timer-context";
import "./Timer.css";

export default function Timer(): JSX.Element {
  const ctx = useContext(TimerContext);
  const time = ctx.service.getCurrentTime();
  const counter = ctx.service.getCounter();

  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((time / 3600) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 60) % 60)).slice(-2)}:
      </span>
      <span className="digits">{("0" + Math.floor(time % 60)).slice(-2)}</span>
      <span className="counter">{counter}</span>
    </div>
  );
}
