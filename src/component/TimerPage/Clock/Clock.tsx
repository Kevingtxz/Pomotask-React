import { useDispatch, useSelector } from "react-redux";
import { timerAction } from "../../../store/reducer/timer-reducer";
import { RootState } from "../../../store/store";
import style from "./Clock.module.css";

export default function Clock(): JSX.Element {
  const dispatch = useDispatch();
  const isStarted = useSelector(
    (state: RootState) => state.timerReducer.started
  );
  const changeSettings = !isStarted
    ? () => {
        dispatch(timerAction.changeSettings());
        dispatch(timerAction.reset());
      }
    : () => {};

  return (
    <div onClick={changeSettings} className={style["clock"]}>
      <div className={`${style["pointer"]}`}></div>
    </div>
  );
}
