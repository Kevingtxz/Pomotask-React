import style from "./TimerBig.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

export default function TimerBig(): JSX.Element {
  const time = useSelector(
    (state: RootState) => state.timerReducer.currentTimeBig
  );

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
