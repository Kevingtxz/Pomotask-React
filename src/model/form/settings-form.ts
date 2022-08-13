import Form from "./abs-form";

export default interface SettingsForm extends Form {
  defaultBigTimeSec: number;
  defaultTimeSec: number;
  goalTimers: number;
}
