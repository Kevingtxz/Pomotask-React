import "./StopWatch.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";

import TimerBig from "../TimerBig/TimerBig";

function StopWatch(): JSX.Element {
  return (
    <div className="stop-watch">
      <TimerBig />
      <Timer />
      <div className="control-btns">
        <ControlButtons />
      </div>
    </div>
  );
}

export default StopWatch;
