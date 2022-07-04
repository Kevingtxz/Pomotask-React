import React from "react";
import TaskModel from "../../model/TaskModel";
import TimerModel from "../../model/TimerModel";
import TimerService from "../../service/TimerService";
import { TimerContextType } from "../../utils/store-types";

const TimerContext = React.createContext({
  service: new TimerService(),
  dispatchAddItem: (item: TimerModel): void => {},
  dispatchSetSelectedTask: (task: TaskModel): void => {},
  dispatchCreateBigTimer: (): void => {},
  dispatchStart: (): void => {},
  dispatchPauseResume: (): void => {},
  dispatchReset: (): void => {},
  dispatchTimerEffect: (): void => {},
  dispatchBigTimerEffect: (): void => {},
} as TimerContextType);

export default TimerContext;
