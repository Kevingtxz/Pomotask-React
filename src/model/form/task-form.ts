import Form from "./abs-form";

export default interface TaskForm extends Form {
  title: string;
  expectedTimeHrs: number;
  needFocus: boolean;
  isCrucial: boolean;
  deadline: number;
}
