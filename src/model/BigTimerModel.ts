import Model from "./Model";

export default interface BigTimerModel extends Model {
  timeMinutes: number;
  goalTimers: number;
  finishAt?: number;
  successful?: boolean;
}
