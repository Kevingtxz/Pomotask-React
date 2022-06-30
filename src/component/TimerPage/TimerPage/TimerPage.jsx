import "./TimerPage.css";
import Clock from "../Clock/Clock";
import StopWatch from "../StopWatch/StopWatch";
import TimerService from "../../../service/TimerService";

export default function TimerPage() {
  const { time, bigTime } = TimerService.getTimerSettings();

  const postTimer = (obj) => TimerService.postTimer(obj);

  return (
    <div className="timer-box">
      <Clock />
      <StopWatch postTimer={postTimer} time={time} bigTime={bigTime} />
    </div>
  );
}
