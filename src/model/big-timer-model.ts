import AbsModel from "./abs-model";
import TimerModel from "./timer-model";

export default interface BigTimerModel extends AbsModel {
  timeSec: number;
  goalTimers: number;
  successful?: boolean;
  finishedAt?: number;
  timerList: TimerModel[];
}
