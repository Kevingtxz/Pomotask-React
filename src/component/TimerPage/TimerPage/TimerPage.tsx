import "./TimerPage.css";
import { useState } from "react";
import Clock from "../Clock/Clock";
import StopWatch from "../StopWatch/StopWatch";
import TimerService from "../../../service/TimerService";
import TaskService from "../../../service/TaskService";
import TimerModel from "../../../model/TimerModel";

export default function TimerPage(): JSX.Element {
  const [task, setTask] = useState(TaskService.getPriorityLevelTask());
  const { time, bigTime } = TimerService.getTimerSettings();

  const postTimer = (obj: TimerModel) => {
    TimerService.postTimer(obj);
    TaskService.patchMinutesWorkingTask(obj.taskId, obj.time);
  };

  return (
    <div className="timer-page">
      <Clock />
      <StopWatch
        postTimer={postTimer}
        taskId={task?.id}
        taskTitle={task?.title}
        initialTime={time}
        initialBigTime={bigTime}
      />
    </div>
  );
}
