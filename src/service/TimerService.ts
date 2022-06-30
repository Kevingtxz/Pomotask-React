import axios from "axios";
import SettingsModel from "../model/SettingsModel";
import TimerModel from "../model/TimerModel";

class TimerService {
  settings: SettingsModel;
  timers: TimerModel[];

  constructor() {
    this.settings = { bigTime: 120, time: 1 };
    this.timers = [];
  }

  getTimerSettings(): SettingsModel {
    return this.settings;
  }

  postTimer(obj: TimerModel) {
    //axios...
    this.timers.push(obj);
    console.log(this.timers);
  }
}

export default new TimerService();
