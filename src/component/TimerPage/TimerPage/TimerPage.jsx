import "./TimerPage.css";
import { useState } from "react";
import Clock from "../Clock/Clock";
import StopWatch from "../StopWatch/StopWatch";
import Task from "../../TaskPage/Task/Task";
import TimerService from "../../../service/TimerService";
import TaskService from "../../../service/TaskService";

export default function TimerPage() {
  const [task, setTask] = useState(TaskService.getPriorityLevelTask());
  const { time, bigTime } = TimerService.getTimerSettings();

  const deleteTask = (id) => {
    TaskService.deleteTask(id);
    setTask(TaskService.getPriorityLevelTask());
  };
  const postTimer = (obj) => {
    TimerService.postTimer(obj);
    TaskService.patchMinutesWorkingTask(obj.taskId, obj.time);
  };

  return (
    <div className="timer-page">
      <div className="task-box">
        {(task && (
          <Task task={task} handlerRemove={deleteTask.bind(null, task.id)} />
        )) || <Task />}
      </div>
      <Clock />
      <StopWatch
        postTimer={postTimer}
        taskId={task.id}
        time={time}
        bigTime={bigTime}
      />
    </div>
  );
}
