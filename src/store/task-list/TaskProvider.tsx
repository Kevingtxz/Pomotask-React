import { ReactNode, useReducer } from "react";
import TaskContext from "./task-service-context";
import TaskModel from "../../model/TaskModel";
import TaskListModel from "../../model/TaskListModel";
import { ActionsEnum } from "../actions-types";
import { ActionTask } from "../actions-types";

const defaultTaskState: TaskListModel = {
  items: [] as TaskModel[],
};

const taskReducer = (
  state: TaskListModel,
  action: ActionTask
): TaskListModel => {
  let updatedItems: TaskModel[] = [...state.items];

  switch (action.type) {
    case ActionsEnum.ADD:
      return { items: updatedItems } as TaskListModel;
    default:
      return defaultTaskState;
  }
};

type TaskProviderProps = { children: ReactNode };

export default function TaskProvider({
  children,
}: TaskProviderProps): JSX.Element {
  const [taskState, dispatchTaskAction] = useReducer(
    taskReducer,
    defaultTaskState
  );

  const addItemToTaskHandler = (item: TaskModel): TaskModel => {
    dispatchTaskAction({ type: ActionsEnum.ADD, item: item } as ActionTask);
    return item;
  };

  const taskContext = {
    items: taskState.items,
    addItem: addItemToTaskHandler,
    // removeItem: removeItemFromTaskHandler,
  } as TaskListModel;

  return (
    <TaskContext.Provider value={taskContext}>{children}</TaskContext.Provider>
  );
}
