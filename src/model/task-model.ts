import Model from "./model";

export default interface TaskModel extends Model {
  title: string;
  expectedTimeHours: number;
  needFocus: boolean;
  isCrucial: boolean;
  deadline: number;
  workedTimeMinutes: number;
  priorityLevel: number;
  successful: boolean;
  healthLevel: number;
  finishedAt?: number;
}
