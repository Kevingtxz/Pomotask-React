import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timer-reducer";
import taskReducer from "./task-reducer";

const store = configureStore({
  reducer: { timerReducer, taskReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
