import Model from "./model";

export default interface BigTimerModel extends Model {
  timeSeconds: number;
  goalTimers: number;
  finishAt?: number;
  successful?: boolean;
}
