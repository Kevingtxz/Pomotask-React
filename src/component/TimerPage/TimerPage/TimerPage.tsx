import "./TimerPage.css";
import { useState } from "react";
import Clock from "../Clock/Clock";
import StopWatch from "../StopWatch/StopWatch";
import Task from "../../TaskPage/Task/Task";
import TimerService from "../../../service/TimerService";
import TaskService from "../../../service/TaskService";
import TimerModel from "../../../model/TimerModel";

export default function TimerPage(): JSX.Element {
  const [task, setTask] = useState(TaskService.getPriorityLevelTask());
  const { time, bigTime } = TimerService.getTimerSettings();

  const deleteTask = (id: number) => {
    TaskService.deleteTask(id);
    setTask(TaskService.getPriorityLevelTask());
  };
  const postTimer = (obj: TimerModel) => {
    TimerService.postTimer(obj);
    TaskService.patchMinutesWorkingTask(obj.taskId, obj.time);
  };

  return (
    <div className="timer-page">
      <div className="task-box">
        {
          <Task
            task={task ? task : undefined}
            onRemove={task ? deleteTask.bind(null, task.id) : undefined}
          />
        }
      </div>
      <Clock />
      <StopWatch
        postTimer={postTimer}
        taskId={task ? task.id : undefined}
        initialTime={time}
        initialBigTime={bigTime}
      />
    </div>
  );
}
