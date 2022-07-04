import Model from "./Model";

export default interface TimerModel extends Model {
  bigTimeId?: number;
  taskId?: number;
  timeMinutes: number;
  stopsCounter?: number;
  finishedAt?: number;
  successful: boolean;
}
