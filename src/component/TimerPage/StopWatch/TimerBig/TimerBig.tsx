import style from "./TimerBig.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { timerEffect, reset } from "../../../../store/timer-reducer";
import { RootState } from "../../../../store/store";

export default function TimerBig(): JSX.Element {
  const dispatch = useDispatch();
  const time = useSelector(
    (state: RootState) => state.timerReducer.currentTimeBig
  );
  const isStarted = useSelector(
    (state: RootState) => state.timerReducer.started
  );
  const isPaused = useSelector((state: RootState) => state.timerReducer.paused);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    if (isStarted && time !== 0)
      interval = setInterval(() => dispatch(timerEffect()), 1000);
    else if (time === 0) dispatch(reset());

    return () => clearInterval(interval);
  }, [isStarted, time, isPaused, dispatch]);

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
    </div>
  );
}
