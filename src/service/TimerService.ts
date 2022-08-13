import TimerForm from "../model/form/timer-form";
import SettingsForm from "../model/form/settings-form";
import BigTimerModel from "../model/big-timer-model";

export default class TimerService {
  static makeForm(timeSec: number): TimerForm {
    const newForm: TimerForm = {
      timeSec,
      createdAt: Date.now(),
    };
    return newForm;
  }
  static getNewSettings(settings: SettingsForm): SettingsForm {
    switch (settings.defaultBigTimeSec) {
      case 7200:
        return {
          createdAt: Date.now(),
          defaultBigTimeSec: 14400,
          defaultTimeSec: 3600,
          goalTimers: 3,
        } as SettingsForm;
      case 14400:
        return {
          createdAt: Date.now(),
          defaultBigTimeSec: 10800,
          defaultTimeSec: 2700,
          goalTimers: 3,
        } as SettingsForm;
      default:
        return {
          createdAt: Date.now(),
          defaultBigTimeSec: 7200,
          defaultTimeSec: 1800,
          goalTimers: 3,
        } as SettingsForm;
    }
  }
  static fromLocalStorage(): BigTimerModel[] {
    return JSON.parse(localStorage.getItem("bigTimerList") || "[]");
  }
}
