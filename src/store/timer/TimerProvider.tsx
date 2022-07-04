import { ReactNode, useReducer } from "react";
import TimerContext from "./timer-context";
import TimerModel from "../../model/TimerModel";
import { ActionsEnum, TimerContextType } from "../../utils/store-types";
import { ActionTimer } from "../../utils/store-types";
import { defaultTimerState, timerReducer } from "./timerReducer";
import TaskModel from "../../model/TaskModel";

type TimerProviderProps = { children: ReactNode };

export default function TimerProvider({
  children,
}: TimerProviderProps): JSX.Element {
  const [stateService, dispatchAction] = useReducer(
    timerReducer,
    defaultTimerState
  );

  const dispatchAddItem = (item: TimerModel): void =>
    dispatchAction({ opt: ActionsEnum.ADD, item: item } as ActionTimer);
  const dispatchSetTaskSelected = (task: TaskModel): void =>
    dispatchAction({ opt: ActionsEnum.SET_SELECTED, task: task });
  const dispatchStart = (): void => dispatchAction({ opt: ActionsEnum.START });
  const dispatchPause = (): void => dispatchAction({ opt: ActionsEnum.PAUSE });
  const dispatchReset = (): void => dispatchAction({ opt: ActionsEnum.RESET });
  const dispatchTimerEffect = (): void =>
    dispatchAction({ opt: ActionsEnum.TIMER_EFFECT });
  const dispatchBigTimerEffect = (): void =>
    dispatchAction({ opt: ActionsEnum.BIG_TIMER_EFFECT });

  const ctx = {
    service: stateService,
    dispatchAddItem: dispatchAddItem,
    dispatchSetSelectedTask: dispatchSetTaskSelected,
    dispatchStart: dispatchStart,
    dispatchPauseResume: dispatchPause,
    dispatchReset: dispatchReset,
    dispatchTimerEffect: dispatchTimerEffect,
    dispatchBigTimerEffect: dispatchBigTimerEffect,
  } as TimerContextType;

  return <TimerContext.Provider value={ctx}>{children}</TimerContext.Provider>;
}
