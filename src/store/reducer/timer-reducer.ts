import { createSlice } from "@reduxjs/toolkit";
import TimerForm from "../../model/form/timer-form";
import SettingsForm from "../../model/form/settings-form";
import TimerService from "../../service/TimerService";
import BigTimerForm from "../../model/form/big-timer-form";

export interface TimerState {
  settings: SettingsForm;
  bigTimer: BigTimerForm;
  currentTimeBig: number;
  currentTime: number;
  started: boolean;
  active: boolean;
  paused: boolean;
}

const initialTimerState: TimerState = {
  settings: {
    createdAt: Date.now(),
    defaultBigTimeSec: 14400,
    defaultTimeSec: 1800,
    goalTimers: 0,
  },
  bigTimer: {
    createdAt: Date.now(),
    timeSec: 14400,
    timerList: [],
    goalTimers: 3,
  },
  currentTimeBig: 14400,
  currentTime: 3600,
  started: false,
  active: false,
  paused: false,
};

const timerSlice = createSlice({
  name: "task",
  initialState: initialTimerState,
  reducers: {
    newTimer(state: TimerState) {
      const newTimer = TimerService.makeForm(state.settings.defaultTimeSec);
      state.bigTimer.timerList.push(newTimer);
      state.currentTime = state.settings.defaultTimeSec;
      state.paused = true;
    },
    start(state: TimerState) {
      state.started = true;
      state.active = true;
    },
    pause(state: TimerState) {
      state.paused = !state.paused;
    },
    reset(state: TimerState) {
      state.bigTimer.timerList = [] as TimerForm[];
      state.currentTime = state.settings.defaultTimeSec;
      state.currentTimeBig = state.settings.defaultBigTimeSec;
      state.started = false;
      state.active = false;
      state.paused = false;
    },
    timeEffect(state: TimerState) {
      state.currentTimeBig -= 1;
      if (state.currentTimeBig === 0) state.active = false;
      if (!state.paused && state.currentTime !== 0) state.currentTime -= 1;
    },
    changeSettings(state: TimerState) {
      state.settings = TimerService.getNewSettings(state.settings);
    },
  },
});
const timerReducer = timerSlice.reducer;

export const timerAction = timerSlice.actions;
export default timerReducer;
