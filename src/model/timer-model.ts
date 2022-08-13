import AbsModel from "./abs-model";

export default interface TimerModel extends AbsModel {
  taskId?: number;
  timeSec: number;
  stopsCounter?: number;
  finishedAt?: number;
  successful: boolean;
}
