import { createSlice } from "@reduxjs/toolkit";
import TaskModel from "../model/task-model";
import { TASK_LIST } from "../util/DUMMY";

export type TaskState = {
  listTask: TaskModel[];
  selectedTask?: TaskModel;
};

const initialTaskState: TaskState = {
  listTask: TASK_LIST,
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialTaskState,
  reducers: {
    add(state: TaskState, { payload }: { payload: TaskModel }) {
      state.listTask.push(payload);
    },
    remove(state: TaskState, { payload }: { payload: number }) {
      state.listTask = state.listTask.filter((item) => item.id !== payload);
    },
    taskSelect(state: TaskState, { payload }: { payload: number }) {
      const idx: number = state.listTask.findIndex(
        (item) => item.id === payload
      );
      state.selectedTask = state.listTask[idx];
    },
    taskSuccess(state: TaskState, { payload }: { payload: number }) {
      const idx: number = state.listTask.findIndex(
        (item) => item.id === payload
      );
      state.listTask[idx].finishedAt = Date.now();
      state.listTask[idx].successful = true;
    },
  },
});
const taskReducer = taskSlice.reducer;

export const { add, remove, taskSelect, taskSuccess } = taskSlice.actions;
export default taskReducer;
