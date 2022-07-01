import React from "react";
import TaskModel from "../../model/TaskModel";
import TaskListModel from "../../model/TaskListModel";

const TaskServiceContext = React.createContext({
  items: [] as TaskModel[],
  addItem: (task: TaskModel) => task,
  removeItem: (id: number) => {},
  sortItems: () => {},
} as TaskListModel);

export default TaskServiceContext;
