import style from "./StopWatch.module.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";

import TimerBig from "../TimerBig/TimerBig";

function StopWatch(): JSX.Element {
  return (
    <div className={style["stop-watch"]}>
      <TimerBig />
      <Timer />
      <ControlButtons />
    </div>
  );
}

export default StopWatch;
