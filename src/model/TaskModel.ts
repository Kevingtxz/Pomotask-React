import Model from "./Model";

export default interface TaskModel extends Model {
  id: number;
  title: string;
  priorityLevel: number;
  healthLevel: number;
  expectedTimeHours: number;
  needFocus: boolean;
  deadline: number;
  workedTimeMinutes: number;
  finishedAt?: number;
  successful: boolean;
}
