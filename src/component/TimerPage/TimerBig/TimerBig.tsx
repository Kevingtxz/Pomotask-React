import style from "./TimerBig.module.css";
import { useContext, useEffect } from "react";
import TimerContext from "../../../store/timer/timer-context";

export default function TimerBig(): JSX.Element {
  const ctx = useContext(TimerContext);
  const isStarted = ctx.service.isStarted();
  const isPaused = ctx.service.isPaused();
  const currentTimeBig = ctx.service.getCurrentTimeBig();
  const currentTime = ctx.service.getCurrentTime();
  const dispatchBigTimerEffect = ctx.dispatchBigTimerEffect;
  const dispatchTimerEffect = ctx.dispatchTimerEffect;
  const dispatchReset = ctx.dispatchReset;

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    if (isStarted && currentTimeBig !== 0) {
      interval = setInterval(() => {
        dispatchBigTimerEffect();
        if (!isPaused && currentTime !== 0) dispatchTimerEffect();
      }, 1000);
    } else if (currentTimeBig === 0) dispatchReset();

    return () => clearInterval(interval);
  }, [
    isStarted,
    currentTimeBig,
    currentTime,
    isPaused,
    dispatchBigTimerEffect,
    dispatchTimerEffect,
    dispatchReset,
  ]);

  return (
    <div className={style["timer"]}>
      <span className={style["digits"]}>
        {("0" + Math.floor((currentTimeBig / 3600) % 60)).slice(-2)}:
      </span>
      <span className={style["digits"]}>
        {("0" + Math.floor((currentTimeBig / 60) % 60)).slice(-2)}:
      </span>
      <span className={style["digits"]}>
        {("0" + Math.floor(currentTimeBig % 60)).slice(-2)}
      </span>
    </div>
  );
}
