import style from "./Timer.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { taskAction } from "../../../../store/reducer/task-reducer";
import { timerAction } from "../../../../store/reducer/timer-reducer";

export default function Timer(): JSX.Element {
  const dispatch = useDispatch();
  const time = useSelector(
    (state: RootState) => state.timerReducer.currentTime
  );
  const defaultTime = useSelector(
    (state: RootState) => state.timerReducer.settings.defaultTimeSec
  );
  const counter = useSelector(
    (state: RootState) => state.timerReducer.bigTimer.timerList.length
  );

  useEffect(() => {
    if (time === 0) {
      dispatch(taskAction.workOnSelectedTask(defaultTime));
      dispatch(timerAction.newTimer());
      dispatch(taskAction.selectTask(-1));
    }
  }, [defaultTime, time, dispatch]);

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
