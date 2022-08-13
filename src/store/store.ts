import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./reducer/timer-reducer";
import taskReducer from "./reducer/task-reducer";
import historyReducer from "./reducer/history-reducer";

const store = configureStore({
  reducer: { timerReducer, taskReducer, historyReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
