import style from "./TimerBox.module.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";

import TimerBig from "../TimerBig/TimerBig";

function TimerBox(): JSX.Element {
  return (
    <div className={style["timer-box"]}>
      <TimerBig />
      <Timer />
      <ControlButtons />
    </div>
  );
}

export default TimerBox;
