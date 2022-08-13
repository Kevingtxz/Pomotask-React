import Form from "./abs-form";

export default interface TimerForm extends Form {
  timeSec: number;
  finishedAt?: number;
}
