import { createSlice } from "@reduxjs/toolkit";
import BigTimerModel from "../../model/big-timer-model";
import TaskModel from "../../model/task-model";
import HistoryService from "../../service/HistoryService";

export type HistoryState = {
  taskFinishedList: TaskModel[];
  bigTimerFinishedList: BigTimerModel[];
};

const initialHistoryState: HistoryState = {
  taskFinishedList: [] as TaskModel[],
  bigTimerFinishedList: [] as BigTimerModel[],
};

const historySlice = createSlice({
  name: "history",
  initialState: initialHistoryState,
  reducers: {
    loadHistory(state: HistoryState, { payload }: { payload: HistoryState }) {
      state = payload;
    },
    finishTask(state: HistoryState, { payload }: { payload: TaskModel }) {
      state.taskFinishedList.unshift(payload);
      HistoryService.saveOnLocalStorageHistory(state);
    },
    finishBigTimer(
      state: HistoryState,
      { payload }: { payload: BigTimerModel }
    ) {
      state.bigTimerFinishedList.unshift(payload);
      HistoryService.saveOnLocalStorageHistory(state);
    },
  },
});
const historyReducer = historySlice.reducer;

export const historyAction = historySlice.actions;
export default historyReducer;
