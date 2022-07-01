import "./TimerPage.css";
import { useState } from "react";
import Clock from "../Clock/Clock";
import StopWatch from "../StopWatch/StopWatch";
import TimerService from "../../../service/TimerService";
import TaskModel from "../../../model/TaskModel";
import TaskChooser from "../TaskChooser/TaskChooser";

export default function TimerPage(): JSX.Element {
  const { time, bigTime } = TimerService.getTimerSettings();
  const [task, setTask] = useState({} as TaskModel);

  const setChosenTask = (task: TaskModel) => setTask(task);
  const onTimerEnd = () => {};

  return (
    <div className="timer-page">
      <TaskChooser setChosenTask={setChosenTask} />
      <Clock />
      <StopWatch
        onTimerEnd={onTimerEnd}
        initialTime={time}
        initialBigTime={bigTime}
      />
    </div>
  );
}
