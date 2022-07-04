import React from "react";
import TaskModel from "../../model/TaskModel";
import { TaskContextState, TaskContextType } from "../../utils/store-types";
import TaskFinishedModel from "../../model/TaskFinishedModel";

const TaskContext = React.createContext({
  state: {
    list: [] as TaskModel[],
    listFinished: [] as TaskFinishedModel[],
  } as TaskContextState,
  dispatchAddItem: (item: TaskModel): void => {},
  dispatchRemoveItem: (id: number): void => {},
  dispatchSetSuccessful: (id: number) => {},
  dispatchSetSelected: (id: number) => {},
} as TaskContextType);

export default TaskContext;
