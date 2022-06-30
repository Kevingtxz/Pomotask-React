export default interface TaskModel {
  id: number;
  title: string;
  priorityLevel: number;
  healthLevel: number;
  expectedTimeHours: number;
  needFocus: boolean;
  deadline: number | Date;
  workedTimeMinutes: number;
  createdAt: Date;
  successful: boolean;
}
