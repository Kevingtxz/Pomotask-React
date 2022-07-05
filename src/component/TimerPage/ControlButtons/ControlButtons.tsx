import style from "./ControlButtons.module.css";
import { useContext } from "react";
import TimerContext from "../../../store/timer/timer-context";

export default function ControlButtons(): JSX.Element {
  const ctx = useContext(TimerContext);
  const taskTitle: string | undefined = ctx.service.getSelectedTask()?.title;
  const isPaused = ctx.service.isPaused();
  const isActive = ctx.service.isActive();
  const handleStart = ctx.dispatchStart;
  const handlePauseResume = ctx.dispatchPauseResume;
  const handleReset = ctx.dispatchReset;

  const StartButton = (
    <div
      className={
        style["btn"] + " " + style["btn-one"] + " " + style["btn-start"]
      }
      onClick={handleStart}
    >
      {taskTitle ? taskTitle : "Start"}
    </div>
  );
  const ActiveButtons = (
    <div className={style["btn-grp"]}>
      <div
        className={style["btn"] + " " + style["btn-one"]}
        onClick={handlePauseResume}
      >
        {isPaused ? "Resume" : "Pause"}
      </div>
      <div
        className={style["btn"] + " " + style["btn-two"]}
        onClick={handleReset}
      >
        Reset
      </div>
    </div>
  );

  return <div>{isActive ? ActiveButtons : StartButton}</div>;
}
