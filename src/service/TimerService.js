import axios from "axios";

class TimerService {
  constructor() {
    this.settings = { bigTime: 120, time: 1 };
    this.timers = [];
  }

  getTimerSettings() {
    //axios...
    return this.settings;
  }

  postTimer(obj) {
    //axios...
    this.timers.push(obj);
    console.log(this.timers);
  }
}

export default new TimerService();
