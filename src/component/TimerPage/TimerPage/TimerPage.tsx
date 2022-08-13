import style from "./TimerPage.module.css";
import Clock from "../Clock/Clock";
import TimerBox from "../TimerBox/TimerBox/TimerBox";
import TaskSelect from "../../TaskPage/TaskSelect/TaskSelect/TaskSelect";

export default function TimerPage(): JSX.Element {
  return (
    <div className={style["timer-page"]}>
      <TaskSelect />
      <Clock />
      <TimerBox />
    </div>
  );
}
