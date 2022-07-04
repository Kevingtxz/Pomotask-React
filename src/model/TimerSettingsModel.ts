import Model from "./Model";

export default interface SettingsModel extends Model {
  bigTimeSeconds: number;
  timeSeconds: number;
  goalTimers: number;
}
