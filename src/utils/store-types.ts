import TaskModel from "../model/TaskModel";

export enum ActionsEnum {
  ADD = 1,
  REMOVE = 2,
  SORT = 3,
}

export type ActionTask = {
  type: ActionsEnum;
  item?: TaskModel;
  id?: number;
};

export interface TaskListContextType {
  list: TaskModel[];
  dispatchAddItem: (item: TaskModel) => void;
  dispatchRemoveItem: (id: number) => void;
}
