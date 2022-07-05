import TaskModel from "../model/TaskModel";
import TimerModel from "../model/TimerModel";
import TaskService from "../service/TaskService";
import TimerService from "../service/TimerService";

export enum ActionsEnum {
  ADD = 1,
  REMOVE = 2,
  SORT = 3,
  SET_SUCCESSFUL = 4,
  SET_SELECTED = 5,
  CREATE_BIG = 6,
  START = 7,
  PAUSE = 8,
  RESET = 9,
  TIMER_EFFECT = 10,
  BIG_TIMER_EFFECT = 11,
}

export type ActionTimer =
  | {
      opt: ActionsEnum.ADD;
      item: TimerModel;
    }
  | {
      opt: ActionsEnum.SET_SELECTED;
      task: TaskModel;
    }
  | {
      opt: ActionsEnum.CREATE_BIG;
    }
  | {
      opt: ActionsEnum.START;
    }
  | {
      opt: ActionsEnum.PAUSE;
    }
  | {
      opt: ActionsEnum.RESET;
    }
  | {
      opt: ActionsEnum.TIMER_EFFECT;
    }
  | {
      opt: ActionsEnum.BIG_TIMER_EFFECT;
    };

export interface TimerContextType {
  service: TimerService;
  dispatchAddItem: (item: TimerModel) => void;
  dispatchSetSelectedTask: (task: TaskModel) => void;
  dispatchCreateBigTimer: () => void;
  dispatchStart: () => void;
  dispatchPauseResume: () => void;
  dispatchReset: () => void;
  dispatchTimerEffect: () => void;
  dispatchBigTimerEffect: () => void;
}

export type ActionTask =
  | {
      opt: ActionsEnum.ADD;
      item: TaskModel;
    }
  | {
      opt: ActionsEnum.REMOVE;
      id: number;
    }
  | {
      opt: ActionsEnum.SET_SUCCESSFUL;
      id: number;
    }
  | {
      opt: ActionsEnum.SET_SELECTED;
      id: number;
    };

export interface TaskContextType {
  service: TaskService;
  dispatchAddItem: (item: TaskModel) => void;
  dispatchRemoveItem: (id: number) => void;
  dispatchSetSuccessful: (id: number) => void;
  dispatchSetSelected: (id: number) => void;
}
