import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { timerAction } from "../../../../store/reducer/timer-reducer";
import style from "./ControlButtons.module.css";

export default function ControlButtons(): JSX.Element {
  const dispatch = useDispatch();
  const taskTitle: string | undefined = useSelector((state: RootState) =>
    state.taskReducer.selectedTaskId
      ? state.taskReducer.taskList.find(
          (item) => item.id === state.taskReducer.selectedTaskId
        )?.title
      : undefined
  );
  const isPaused = useSelector((state: RootState) => state.timerReducer.paused);
  const isActive = useSelector((state: RootState) => state.timerReducer.active);
  const handleStart = () => {
    dispatch(timerAction.start());
  };
  const handlePauseResume = () => {
    dispatch(timerAction.pause());
  };
  const handleReset = () => {
    dispatch(timerAction.reset());
  };

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
