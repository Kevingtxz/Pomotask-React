import style from "./TimerPage.module.css";
import Clock from "../Clock/Clock";
import StopWatch from "../StopWatch/StopWatch";
import TaskSelect from "../TaskSelect/TaskSelect";

export default function TimerPage(): JSX.Element {
  return (
    <div className={style["timer-page"]}>
      <TaskSelect />
      <Clock />
      <StopWatch />
    </div>
  );
}
