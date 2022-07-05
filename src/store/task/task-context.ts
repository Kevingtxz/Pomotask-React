import React from "react";
import TaskModel from "../../model/TaskModel";
import TaskService from "../../service/TaskService";
import { TaskContextType } from "../../util/store-types";

const TaskContext = React.createContext({
  service: new TaskService(),
  dispatchAddItem: (item: TaskModel): void => {},
  dispatchRemoveItem: (id: number): void => {},
  dispatchSetSuccessful: (id: number): void => {},
  dispatchSetSelected: (id: number): void => {},
} as TaskContextType);

export default TaskContext;
