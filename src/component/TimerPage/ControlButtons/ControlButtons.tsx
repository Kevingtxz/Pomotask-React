import { useContext } from "react";
import TimerContext from "../../../store/timer/timer-context";
import "./ControlButtons.css";

export default function ControlButtons(): JSX.Element {
  const ctx = useContext(TimerContext);
  const taskTitle: string | undefined = ctx.service.getSelectedTask()?.title;
  const isPaused = ctx.service.isPaused();
  const isActive = ctx.service.isActive();
  const handleStart = ctx.dispatchStart;
  const handlePauseResume = ctx.dispatchPauseResume;
  const handleReset = ctx.dispatchReset;

  const StartButton = (
    <div className="btn btn-one btn-start" onClick={handleStart}>
      {taskTitle ? taskTitle : "Start"}
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-one" onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </div>
      <div className="btn btn-two" onClick={handleReset}>
        Reset
      </div>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{isActive ? ActiveButtons : StartButton}</div>
    </div>
  );
}
