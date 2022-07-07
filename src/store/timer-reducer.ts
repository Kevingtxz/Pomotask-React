import { createSlice } from "@reduxjs/toolkit";
import TimerForm from "../model/form/timer-form";
import BigTimerModel from "../model/big-timer-model";
import SettingsModel from "../model/settings-model";

export interface TimerState {
  settings: SettingsModel;
  bigTimer?: BigTimerModel;
  listTimer: TimerForm[];
  currentTimeBig: number;
  currentTime: number;
  started: boolean;
  active: boolean;
  paused: boolean;
  shouldSave: boolean;
}

const initialTimerState: TimerState = {
  settings: {
    createdAt: Date.now(),
    bigTimeSeconds: 16200,
    timeSeconds: 3600,
    goalTimers: 3,
  },
  listTimer: [] as TimerForm[],
  currentTime: 3600,
  currentTimeBig: 16200,
  started: false,
  active: false,
  paused: false,
  shouldSave: false,
};

const timerSlice = createSlice({
  name: "task",
  initialState: initialTimerState,
  reducers: {
    add(state: TimerState, { payload }: { payload: TimerForm }) {
      state.listTimer.push(payload);
    },
    start(state: TimerState) {
      state.started = true;
      state.active = true;
    },
    pause(state: TimerState) {
      state.paused = !state.paused;
    },
    reset(state: TimerState) {
      state = initialTimerState;
    },
    timerEffect(state: TimerState) {
      state.currentTimeBig -= 1;
      if (state.currentTimeBig === 0) state.active = false;
      if (!state.paused && state.currentTime !== 0) state.currentTime -= 1;
    },
  },
});
const timerReducer = timerSlice.reducer;

export const { add, start, pause, reset, timerEffect } = timerSlice.actions;
export default timerReducer;
