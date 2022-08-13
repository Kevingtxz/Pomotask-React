import { createSlice } from "@reduxjs/toolkit";
import TaskModel from "../../model/task-model";
import TaskService from "../../service/TaskService";

export type TaskState = {
  taskList: TaskModel[];
  selectedTaskId?: number;
};

const initialTaskState: TaskState = {
  taskList: [] as TaskModel[],
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialTaskState,
  reducers: {
    loadTask(state: TaskState, { payload }: { payload: TaskModel[] }) {
      state.taskList = TaskService.makeSortedTaskList(payload);
      TaskService.saveOnLocalStorage(state.taskList);
    },
    addTask(state: TaskState, { payload }: { payload: TaskModel }) {
      const idx = state.taskList.findIndex((item) => item.id === payload.id);
      if (idx === -1) state.taskList.push(payload);
      else state.taskList[idx] = payload;
      state.taskList = TaskService.makeSortedTaskList(state.taskList);
      TaskService.saveOnLocalStorage(state.taskList);
    },
    removeTask(state: TaskState, { payload }: { payload: number }) {
      state.taskList = state.taskList.filter((item) => item.id !== payload);
      TaskService.saveOnLocalStorage(state.taskList);
    },
    selectTask(state: TaskState, { payload }: { payload: number }) {
      state.selectedTaskId = state.taskList.find(
        (item) => item.id === payload
      )?.id;
    },
    successTask(state: TaskState, { payload }: { payload: number }) {
      if (state.selectedTaskId === payload) state.selectedTaskId = undefined;
      const idx: number = state.taskList.findIndex(
        (item) => item.id === payload
      );
      state.taskList[idx].finishedAt = Date.now();
      state.taskList[idx].successful = true;
      state.taskList = state.taskList.filter(
        (item) => item !== state.taskList[idx]
      );
      TaskService.saveOnLocalStorage(state.taskList);
    },
    workOnSelectedTask(state: TaskState, { payload }: { payload: number }) {
      if (state.selectedTaskId) {
        const idx = state.taskList.findIndex(
          (item) => item.id === state.selectedTaskId
        );
        state.taskList[idx].workedTimeMin += payload;
      }
      TaskService.saveOnLocalStorage(state.taskList);
    },
  },
});
const taskReducer = taskSlice.reducer;

export const taskAction = taskSlice.actions;
export default taskReducer;
