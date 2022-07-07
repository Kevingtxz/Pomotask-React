export default interface TaskModel {
  title: string;
  expectedTimeHours: number;
  needFocus: boolean;
  isCrucial: boolean;
  deadline: number;
}
