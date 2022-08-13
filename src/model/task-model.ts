import AbsModel from "./abs-model";

export default interface TaskModel extends AbsModel {
  title: string;
  expectedTimeHrs: number;
  needFocus: boolean;
  isCrucial: boolean;
  deadline: number;
  workedTimeMin: number;
  successful: boolean;
  finishedAt?: number;
}
