import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import style from "./Timer.module.css";

export default function Timer(): JSX.Element {
  const time = useSelector(
    (state: RootState) => state.timerReducer.currentTime
  );
  const counter = useSelector(
    (state: RootState) => state.timerReducer.listTimer?.length
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
      <span className={style["counter"]}>{counter}</span>
    </div>
  );
}
