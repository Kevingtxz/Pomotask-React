import TimerService from "../../service/TimerService";
import { ActionsEnum, ActionTimer } from "../../utils/store-types";

export const defaultTimerState: TimerService = new TimerService();

export const timerReducer = (
  service: TimerService = defaultTimerState,
  action: ActionTimer
): TimerService => {
  const opt = action.opt;
  if (opt === ActionsEnum.ADD) service.getAll().push(action.item);
  else if (opt === ActionsEnum.SET_SELECTED)
    service.setSelectedTask(action.task);
  else if (opt === ActionsEnum.START) service.start();
  else if (opt === ActionsEnum.PAUSE) service.pause();
  else if (opt === ActionsEnum.RESET) return new TimerService();
  else if (opt === ActionsEnum.TIMER_EFFECT) service.timerEffect();
  else if (opt === ActionsEnum.BIG_TIMER_EFFECT) service.bigTimerEffect();
  return service.clone();
};
