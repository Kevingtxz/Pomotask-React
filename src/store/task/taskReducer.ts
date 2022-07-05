import TaskService from "../../service/TaskService";
import { ActionsEnum, ActionTask } from "../../util/store-types";

export const defaultTaskState: TaskService = new TaskService();

export const taskReducer = (
  service: TaskService = defaultTaskState,
  action: ActionTask
): TaskService => {
  if (action.opt === ActionsEnum.ADD) service.saveItem(action.item);
  else if (action.opt === ActionsEnum.REMOVE) service.removeById(action.id);
  else if (action.opt === ActionsEnum.SET_SUCCESSFUL)
    service.setSuccessful(action.id);
  else if (action.opt === ActionsEnum.SET_SELECTED)
    service.setSelected(action.id);
  return service.clone();
};
