import Form from "./abs-form";
import TimerForm from "./timer-form";

export default interface BigTimerForm extends Form {
  timerList: TimerForm[];
  timeSec: number;
  goalTimers: number;
  finishedAt?: number;
  successful?: boolean;
}
