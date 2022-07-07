import Model from "./model";

export default interface TimerModel extends Model {
  timeSeconds: number;
  bigTimeId?: number;
  taskId?: number;
  stopsCounter?: number;
  finishedAt?: number;
  successful: boolean;
}
