import React from "react";
import TaskModel from "../../model/TaskModel";
import { TaskListContextType } from "../../utils/store-types";

const TaskListContext = React.createContext({
  list: [] as TaskModel[],
  dispatchAddItem: (item: TaskModel): void => {},
  dispatchRemoveItem: (id: number): void => {},
} as TaskListContextType);

export default TaskListContext;
